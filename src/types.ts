export type obj<T> = {
  [key: string]: T;
};

export type date = {
  year: number;
  month: number;
  day: number;
};

export type time = {
  hour: number;
  minute: number;
};

export type rxTx = {
  rx: number;
  tx: number;
};

/** vnstat v1 data scheme */
export type VnstatDataV1 = {
  vnstatversion: string;
  jsonversion: string;
  interfaces: {
    id: string;
    nick: string;
    created: { date: date };
    updated: {
      date: date;
      time: time;
    };
    traffic: {
      total: rxTx;
      days: ({
        id: number;
        date: date;
      } & rxTx)[];
      months: ({
        id: number;
        date: {
          month: number;
          year: number;
        };
      } & rxTx)[];
      tops: ({
        id: number;
        date: date;
        time: time;
      } & rxTx)[];
      hours: ({
        id: number;
        date: date;
      } & rxTx)[];
    };
  }[];
};

/** vnstat v2 data scheme */
export type VnstatDataV2 = {
  vnstatversion: string;
  jsonversion: string;
  interfaces: {
    name: string;
    alias: string;
    created: { date: date };
    updated: { date: date; time: time };
    traffic: {
      total: rxTx;
      fiveminute: ({
        id: number;
        date: date;
        time: time;
      } & rxTx)[];
      hour: ({
        id: number;
        date: date;
        time: time;
      } & rxTx)[];
      day: ({
        id: number;
        date: date;
      } & rxTx)[];
      month: ({
        id: 2;
        date: {
          year: number;
          month: number;
        };
      } & rxTx)[];
      year: ({
        id: number;
        date: { year: number };
      } & rxTx)[];
      top: {}[];
    };
  }[];
};

export const isVnstatV1 = (obj: any): obj is VnstatDataV1 =>
  obj.jsonversion === "1";

export type VnstatData = VnstatDataV1 | VnstatDataV2;

export type formattedData = obj<obj<obj<rxTx & { total: number }>>>;

export type Config = { theme: string };

/** the full users config data scheme */
export type FullConfig<T> = {
  themes: obj<{
    type: "npm" | "github" | "dev";
    name: string;
    version: string;
  }>;
  config: {
    client: Config & {
      themeConfig: T;
    };
    server: {
      port: number;
      vnstatBin: string;
    };
  };
};

export type FullData = {
  vnstatData: VnstatData;
  config: Config;
  list: string[];
};

export type Data = { downData: number[]; upData: number[]; labels: string[] };

export type Types = ObjectType | NumberType | StringType | BooleanType;

export type Type<T extends string> = {
  type: T;
};

export type StringType = {
  oneOf?: string[];
} & Type<"string">;

export type ObjectType = {
  attrs: { __any?: Types } & obj<Types>;
} & Type<"object">;

export type BooleanType = Type<"boolean">;

export type NumberType = Type<"number">;

export interface ThemeData {
  name: string;
  htmlFile: string;
  jsFiles: string[];
  cssFiles?: string[];
  options: obj<Types>;
  defaultOptions: obj<any>;
}
