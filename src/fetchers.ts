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

/**
 * get the themes data.json
 * @param themeName the theme to get data from
 */
export function getThemeData(themeName: string) {
  return getStatic<ThemeData>(themeName, "data.json");
}

export { getStatic };

declare global {
  interface Window {
    __cache?: {
      vnstatData?: VnstatData;
      interfacesList?: string[];
      config?: FullConfig<any>;
    };
  }
}

/**
 * gets the vnstat json data from `vnstat --json`
 * @param reFetch if true will not use cache
 */
export async function getData(reFetch?: boolean) {
  if (!reFetch && window.__cache?.vnstatData) return window.__cache.vnstatData;
  window.__cache = window.__cache || {};
  const { data: vnstatData } = await axios.get<VnstatData>("/api/data");
  window.__cache.vnstatData = vnstatData;
  return vnstatData;
}

/**
 * gets the vnstat available interfaces from `vnstat --iflist`
 * @param reFetch if true will not use cache
 */
export async function getInterfacesList(reFetch?: boolean) {
  if (!reFetch && window.__cache?.interfacesList)
    return window.__cache.interfacesList;
  window.__cache = window.__cache || {};
  const { data: list } = await axios.get<string[]>("/api/interfaces_list");
  window.__cache.interfacesList = list;
  return list;
}

/**
 * gets the user's config file
 * @param reFetch if true will not use cache
 */
export async function getConfig<T>(
  reFetch?: boolean
): Promise<FullConfig<Partial<T>>> {
  if (!reFetch && window.__cache?.config) return window.__cache.config;
  window.__cache = window.__cache || {};
  const { data: config } = await axios.get<FullConfig<Partial<T>>>(
    "/api/config"
  );
  config.config.client.themeConfig =
    config.config.client.themesConfig[config.config.client.theme];
  window.__cache.config = config;
  return config;
}
