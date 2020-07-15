import { Data, VnstatDataV2 } from "../../types";
import { handleMultiInt } from "../handleMultiInt";
import { diff } from "../funcs";

/**
 * get the yearly data on vnstat v2.x
 * NOTE: it support multi interfaces by adding a + between them
 * @param data vnstat data
 * @param interfaceName the interface for getting the data
 */
export function getYearlyData(data: VnstatDataV2, interfaceName: string): Data {
  if (interfaceName.indexOf("+") !== -1) {
    // @ts-ignore
    return handleMultiInt(interfaceName, data, getYearlyData);
  }

  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];

  const years = data.interfaces
    .find((int) => int.name === interfaceName)
    ?.traffic.year.sort((year1, year2) =>
      diff(
        new Date(`01/01/${year1.date.year}`),
        new Date(`01/01/${year2.date.year}`)
      )
    );
  if (!years) throw new Error(`Interface ${interfaceName} doesn't exits`);
  for (const year of years) {
    labels.push(year.date.year.toString());
    downData.push(year.rx);
    upData.push(year.tx);
  }
  return {
    labels,
    upData,
    downData,
  };
}
