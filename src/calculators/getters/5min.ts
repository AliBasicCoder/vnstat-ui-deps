import { VnstatDataV2, Data } from "../../types";
import { diff, dateObjToStr, timeToStr, dateToStr } from "../funcs";
import { handleMultiInt } from "../handleMultiInt";

/**
 * get the 5 minute data on vnstat v2.x
 * NOTE: it support multi interfaces by adding a + between them
 * @param data vnstat data
 * @param interfaceName the interface for getting the data
 */
export function get5MinData(data: VnstatDataV2, interfaceName: string): Data {
  if (interfaceName.indexOf("+") !== -1) {
    // @ts-ignore
    return handleMultiInt(interfaceName, data, get5MinData);
  }

  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];

  const fiveMins = data.interfaces
    .find((int) => int.name === interfaceName)
    ?.traffic.fiveminute.sort((fiveMin1, fiveMin2) =>
      diff(
        new Date(`${dateObjToStr(fiveMin1.date)} ${timeToStr(fiveMin1.time)}`),
        new Date(`${dateObjToStr(fiveMin2.date)} ${timeToStr(fiveMin2.time)}`)
      )
    );
  if (!fiveMins)
    throw new Error(`Debug: Interface ${interfaceName} doesn't exits`);
  for (const fiveMin of fiveMins) {
    const dayStr = dateObjToStr(fiveMin.date);
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
      }${timeToStr(fiveMin.time)}`
    );
    downData.push(fiveMin.rx);
    upData.push(fiveMin.tx);
  }
  return {
    downData,
    upData,
    labels,
  };
}
