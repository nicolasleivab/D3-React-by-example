import { scaleTime } from 'd3-scale';
import { TDataItem, TimeScale, TDateTuple, TNumberTuple } from '../../types';

type TUseXScale = {
  data: TDataItem[];
  width: number;
};

function useXScale({ data, width }: TUseXScale) {
  const sortedData = [...data].sort((a, b) => +a.date - +b.date);
  const firstDate = sortedData[0].date;
  const lastDate = sortedData[sortedData.length - 1].date;

  const domain: TDateTuple = [firstDate, lastDate];
  const range: TNumberTuple = [0, width];

  const xScale: TimeScale = {
    domain,
    range,
    scale: scaleTime().domain(domain).range(range),
  };

  return xScale;
}

export default useXScale;
