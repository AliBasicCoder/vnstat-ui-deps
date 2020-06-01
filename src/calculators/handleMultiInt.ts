import { VnstatData, obj, Data } from "../types";

export function handleMultiInt(
  interfaceName: string,
  data: VnstatData,
  func: (d: VnstatData, i: string) => Data
): Data {
  const downData: number[] = [];
  const upData: number[] = [];
  const labels: string[] = [];
  const obj: obj<Data> = {};
  const res: obj<{ rx: number; tx: number }> = {};
  const interfaces = interfaceName.split("+");
  interfaces.forEach((key) => (obj[key] = func(data, key)));
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const interfaceData = obj[key];
      for (let i = 0; i < interfaceData.labels.length; i++) {
        const label = interfaceData.labels[i];
        if (!res[label])
          res[label] = {
            rx: 0,
            tx: 0,
          };
        res[label].rx += interfaceData.downData[i];
        res[label].tx += interfaceData.upData[i];
      }
    }
  }
  for (const key in res) {
    if (res.hasOwnProperty(key)) {
      downData.push(res[key].rx);
      upData.push(res[key].tx);
      labels.push(key);
    }
  }
  return {
    labels,
    downData,
    upData,
  };
}
