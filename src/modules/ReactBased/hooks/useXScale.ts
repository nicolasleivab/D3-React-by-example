import { scaleTime } from 'd3-scale';
import { TDataItem, TimeScale } from '../../types';

type TUseXScale = {
  data: TDataItem[];
  width: number;
};

function useXScale({ data, width }: TUseXScale) {
  const sortedData = [...data].sort((a, b) => +a.date - +b.date);
  const firstDate = sortedData[0].date;
  const lastDate = sortedData[sortedData.length - 1].date;

  const xScale: TimeScale = {
    domain: [firstDate, lastDate],
    range: [0, width],
    scale: scaleTime(),
  };

  return xScale;
}

export default useXScale;
