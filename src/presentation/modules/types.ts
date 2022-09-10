import type { RefObject, Dispatch, SetStateAction } from 'react';

export type TSetState<T> = Dispatch<SetStateAction<T>>;

export type TWrapper = RefObject<HTMLDivElement>;

export type TPathRef = RefObject<SVGGeometryElement>;

export type TDimensions = {
  width: number;
  height: number;
};

export type TDataItem = {
  value: number;
  date: Date;
};

export type TNumberTuple = [number, number];

export type TDateTuple = [Date, Date];

export type LinearScale = {
  range: TNumberTuple;
  domain: TNumberTuple;
  scale: (arg0: number) => number;
};

export type TimeScale = {
  range: TNumberTuple;
  domain: TDateTuple;
  scale: (arg0: Date) => number;
};
