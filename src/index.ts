import { VnstatData, VnstatDataV1, VnstatDataV2 } from "./types";

export * from "./types";
export * from "./fetchers";
export { get5MinData } from "./calculators/getters/5min";
export { getDailyData } from "./calculators/getters/daily";
export { getHourlyData } from "./calculators/getters/hourly";
export { getMonthlyData } from "./calculators/getters/monthly";
export { getYearlyData } from "./calculators/getters/yearly";

/** gets the selected interface from the `i` query param and null if not found */
export function getSelectedInterface() {
  return new URLSearchParams(window.location.search)
    .get("i")
    ?.replace(/ /g, "+");
}

/**
 * detects if the data is vnstat v1
 * @param data the vnstat data
 */
export function isV1Data(data: VnstatData): data is VnstatDataV1 {
  return data.jsonversion === "1";
}

/**
 * detects if the data is vnstat v2
 * @param data the vnstat data
 */
export function isV2Data(data: VnstatData): data is VnstatDataV2 {
  return data.jsonversion === "2";
}
