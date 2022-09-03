import { scaleLinear } from 'd3-scale';
import { TDataItem, LinearScale } from '../../types';

type TUseYScale = {
  data: TDataItem[];
  height: number;
};

function useYScale({ data, height }: TUseYScale) {
  const sortedData = [...data].sort((a, b) => a.value - b.value);
  const firstValue = sortedData[0].value;
  const lastValue = sortedData[sortedData.length - 1].value;

  const xScale: LinearScale = {
    domain: [firstValue, lastValue],
    range: [0, height],
    scale: scaleLinear(),
  };

  return xScale;
}

export default useYScale;
