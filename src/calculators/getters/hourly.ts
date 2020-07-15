import { Data, VnstatData, isVnstatV1 } from "../../types";
import { handleMultiInt } from "../handleMultiInt";
import { diff, dateObjToStr, dateToStr, cs } from "../funcs";

/**
 * gets the hourly data on vnstat v1 and v2
 * NOTE: it support multi interfaces by adding a + between them
 * @param data the vnstat data
 * @param interfaceName the interface name(s)
 */
export function getHourlyData(data: VnstatData, interfaceName: string): Data {
  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];

  if (interfaceName.indexOf("+") !== -1) {
    return handleMultiInt(interfaceName, data, getHourlyData);
  }

  if (isVnstatV1(data)) {
    const hours = data.interfaces
      .find((int) => int.id === interfaceName)
      ?.traffic.hours.sort((hour1, hour2) =>
        diff(
          new Date(`${dateObjToStr(hour1.date)} ${hour1.id}:00`),
          new Date(`${dateObjToStr(hour2.date)} ${hour2.id}:00`)
        )
      );
    if (!hours) throw new Error(`Interface ${interfaceName} doesn't exits`);

    for (const hour of hours) {
      const dayStr = dateObjToStr(hour.date);
      const date = new Date();
      const todayStr = dateToStr(date);
      labels.push(`${dayStr === todayStr ? "" : "yesterday "}${hour.id}:00`);
      downData.push(cs(hour.rx, true));
      upData.push(cs(hour.tx, true));
    }
  } else {
    const hours = data.interfaces
      .find((int) => int.name === interfaceName)
      ?.traffic.hour.sort((hour1, hour2) =>
        diff(
          new Date(`${dateObjToStr(hour1.date)} ${hour1.time.hour}:00`),
          new Date(`${dateObjToStr(hour2.date)} ${hour2.time.hour}:00`)
        )
      );
    if (!hours) throw new Error(`Interface ${interfaceName} doesn't exits`);
    for (const hour of hours) {
      const dayStr = dateObjToStr(hour.date);
      const date = new Date();
      const todayStr = dateToStr(date);
      date.setDate(date.getDate() - 1);
      const yesterdayStr = dateToStr(date);
      labels.push(
        `${
          dayStr === todayStr
            ? ""
            : dayStr === yesterdayStr
            ? "yesterday "
            : dayStr + " "
        }${hour.time.hour}:00`
      );
      downData.push(cs(hour.rx, false));
      upData.push(cs(hour.tx, false));
    }
  }

  return {
    upData,
    downData,
    labels,
  };
}
