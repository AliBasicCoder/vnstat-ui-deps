import axios, { AxiosResponse } from "axios";
import { VnstatData, FullConfig, ThemeData } from "./types";

function getStatic<T>(
  themeName: string,
  staticName: string,
  holeRes?: false
): Promise<T>;
function getStatic<T>(
  themeName: string,
  staticName: string,
  holeRes: true
): Promise<AxiosResponse<T>>;
/**
 * get a file (static) from your theme directory
 * @param themeName the theme you get a static (aka file) from
 * @param staticName the static path
 * @param holeRes if true will return the hole axios response
 */
async function getStatic<T>(
  themeName: string,
  staticName: string,
  holeRes: boolean = false
) {
  const res = await axios.get<T>(
    `/api/themes/${themeName}/static/${staticName}`
  );
  if (holeRes) return res;
  return res.data;
}

export { getStatic };

/**
 * get the themes data.json
 * @param themeName the theme to get data from
 */
export function getThemeData(themeName: string) {
  return getStatic<ThemeData>(themeName, "data.json");
}

/**
 * gets the vnstat json data from `vnstat --json`
 * @param reFetch if true will not use cache
 */
export async function getData() {
  const { data: vnstatData } = await axios.get<VnstatData>("/api/data");
  return vnstatData;
}

/**
 * gets the vnstat available interfaces from `vnstat --iflist`
 * @param reFetch if true will not use cache
 */
export async function getInterfacesList() {
  const { data: list } = await axios.get<string[]>("/api/interfaces_list");
  return list;
}

/**
 * gets the user's config file
 * @param reFetch if true will not use cache
 */
export async function getConfig<T>(): Promise<FullConfig<Partial<T>>> {
  const { data: config } = await axios.get<FullConfig<Partial<T>>>(
    "/api/config"
  );
  config.config.client.themeConfig =
    config.config.client.themesConfig[config.config.client.theme];
  return config;
}
