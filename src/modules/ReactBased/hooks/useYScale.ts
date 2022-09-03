import { scaleLinear } from 'd3-scale';
import { TDataItem, LinearScale, TNumberTuple } from '../../types';

type TUseYScale = {
  data: TDataItem[];
  height: number;
};

function useYScale({ data, height }: TUseYScale) {
  const sortedData = [...data].sort((a, b) => a.value - b.value);
  const firstValue = sortedData[0].value;
  const lastValue = sortedData[sortedData.length - 1].value;

  const domain: TNumberTuple = [firstValue, lastValue];
  const range: TNumberTuple = [0, height];

  const xScale: LinearScale = {
    domain,
    range,
    scale: scaleLinear().domain(domain).range(range),
  };

  return xScale;
}

export default useYScale;
