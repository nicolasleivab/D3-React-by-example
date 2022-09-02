export type TDimensions = {
  width: number;
  height: number;
};

export type TDataItem = {
  value: number;
  date: Date;
};

export type LinearScale = {
  range: [number, number];
  domain: [number, number];
  scale: (arg0: number) => number;
};

export type TimeScale = {
  range: [number, number];
  domain: [Date, Date];
  scale: (arg0: Date) => number;
};
