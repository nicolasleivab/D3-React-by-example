import { useState, useEffect } from 'react';
import { scaleLinear } from 'd3-scale';
import { debounce } from '../../utils/debounce';
import { TDataItem, LinearScale, TNumberTuple, TWrapper } from '../../types';

type TUseYScale = {
  data: TDataItem[];
  wrapper: TWrapper;
};

function useYScale({ data, wrapper }: TUseYScale) {
  const [wrapperHeight, setWrapperHeight] = useState<number>(0);

  useEffect(() => {
    const { height } = wrapper?.current?.getBoundingClientRect()!;

    const debouncedHandleResize = debounce(() => setWrapperHeight(height), 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  const sortedData = [...data].sort((a, b) => a.value - b.value);
  const firstValue = sortedData[0].value;
  const lastValue = sortedData[sortedData.length - 1].value;

  const domain: TNumberTuple = [firstValue, lastValue];
  const range: TNumberTuple = [0, wrapperHeight];

  const xScale: LinearScale = {
    domain,
    range,
    scale: scaleLinear().domain(domain).range(range),
  };

  return xScale;
}

export default useYScale;
