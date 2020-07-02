import { Data, VnstatData, rxTx, isVnstatV1 } from "../../types";
import { handleMultiInt } from "../handleMultiInt";
import { diff, dateObjToStr, cs } from "../funcs";

/**
 * gets the monthly data on vnstat v1 and v2
 * NOTE: it support multi interfaces by adding a + between them
 * @param data the vnstat data
 * @param interfaceName the interface name(s)
 */
export function getMonthlyData(data: VnstatData, interfaceName: string): Data {
  if (interfaceName.indexOf("+") !== -1) {
    return handleMultiInt(interfaceName, data, getMonthlyData);
  }

  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];
  let months:
    | ({
        id: number;
        date: {
          month: number;
          year: number;
        };
      } & rxTx)[]
    | undefined;

  if (isVnstatV1(data)) {
    months = data.interfaces
      .find((int) => int.id === interfaceName)
      ?.traffic.months.sort((month1, month2) =>
        diff(
          new Date(dateObjToStr({ ...month1.date, day: 1 })),
          new Date(dateObjToStr({ ...month2.date, day: 1 }))
        )
      );
  } else {
    months = data.interfaces
      .find((int) => int.name === interfaceName)
      ?.traffic.month.sort((month1, month2) =>
        diff(
          new Date(dateObjToStr({ ...month1.date, day: 1 })),
          new Date(dateObjToStr({ ...month2.date, day: 1 }))
        )
      );
  }
  if (!months)
    throw new Error(`Debug: Interface ${interfaceName} doesn't exits`);

  const monthsShortcuts = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const isV1 = isVnstatV1(data);

  for (const month of months) {
    labels.push(
      `${monthsShortcuts[month.date.month - 1]} ${String(month.date.year).slice(
        0,
        2
      )}`
    );
    downData.push(cs(month.rx, isV1));
    upData.push(cs(month.tx, isV1));
  }

  return {
    upData,
    downData,
    labels,
  };
}
