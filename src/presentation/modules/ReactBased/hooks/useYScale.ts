import { scaleLinear } from 'd3-scale';
import { TDataItem, LinearScale, TNumberTuple } from '../../types';

type TUseYScale = {
  data: TDataItem[];
  height: number;
};

function useYScale({ data, height }: TUseYScale) {
  const sortedData = [...data].sort((a, b) => a.value - b.value);

  const lastValue = sortedData[sortedData.length - 1].value;

  const domain: TNumberTuple = [0, lastValue];
  const range: TNumberTuple = [height, 0];

  const xScale: LinearScale = {
    domain,
    range,
    scale: scaleLinear().domain(domain).range(range),
  };

  return xScale;
}

export default useYScale;
