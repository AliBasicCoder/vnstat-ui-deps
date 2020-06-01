import convertSize from "convert-size";
import { date, time } from "../types";

export const dateObjToStr = (date: date) =>
  `${addZero(date.month)}/${addZero(date.day)}/${date.year}`;

export const dateToStr = (date: Date) =>
  `${addZero(date.getMonth() + 1)}/${addZero(
    date.getDate()
  )}/${date.getFullYear()}`;

export const timeToStr = (time: time) => `${time.hour}:${time.minute}`;

// @ts-ignore
export const diff = (d1: Date, d2: Date): number => d2 - d1;

export const addZero = (num: number) => `${num < 10 ? "0" : ""}${num}`;

export function cs(num: number, isV1: boolean) {
  if (isV1) return convertSize(`${num} KiB`);
  return num;
}
