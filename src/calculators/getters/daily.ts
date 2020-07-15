import { VnstatData, date, rxTx, isVnstatV1, Data } from "../../types";
import { handleMultiInt } from "../handleMultiInt";
import { diff, dateObjToStr, cs } from "../funcs";

/**
 * gets the daily data on vnstat v1 and v2
 * NOTE: it support multi interfaces by adding a + between them
 * @param data the vnstat data
 * @param interfaceName the interface name(s)
 */
export function getDailyData(data: VnstatData, interfaceName: string): Data {
  if (interfaceName.indexOf("+") !== -1) {
    return handleMultiInt(interfaceName, data, getDailyData);
  }
  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];
  let days:
    | ({
        id: number;
        date: date;
      } & rxTx)[]
    | undefined;

  if (isVnstatV1(data)) {
    days = data.interfaces
      .find((int) => int.id === interfaceName)
      ?.traffic.days.sort((day1, day2) =>
        diff(
          new Date(dateObjToStr(day1.date)),
          new Date(dateObjToStr(day2.date))
        )
      );
  } else {
    days = data.interfaces
      .find((int) => int.name === interfaceName)
      ?.traffic.day.sort((day1, day2) =>
        diff(
          new Date(dateObjToStr(day1.date)),
          new Date(dateObjToStr(day2.date))
        )
      );
  }

  if (!days) throw new Error(`Interface ${interfaceName} doesn't exits`);

  const isV1 = isVnstatV1(data);

  for (const day of days) {
    labels.push(dateObjToStr(day.date));
    downData.push(cs(day.rx, isV1));
    upData.push(cs(day.tx, isV1));
  }

  return {
    upData,
    downData,
    labels,
  };
}
