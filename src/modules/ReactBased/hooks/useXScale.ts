import { scaleTime } from 'd3-scale';
import { useEffect, useState } from 'react';
import { debounce } from '../../utils/debounce';
import {
  TDataItem,
  TimeScale,
  TDateTuple,
  TNumberTuple,
  TWrapper,
} from '../../types';

type TUseXScale = {
  data: TDataItem[];
  wrapper: TWrapper;
};

function useXScale({ data, wrapper }: TUseXScale) {
  const [wrapperWidth, setWrapperWidth] = useState<number>(0);

  useEffect(() => {
    const { width } = wrapper?.current?.getBoundingClientRect()!;

    const debouncedHandleResize = debounce(() => setWrapperWidth(width), 500);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  const sortedData = [...data].sort((a, b) => +a.date - +b.date);
  const firstDate = sortedData[0].date;
  const lastDate = sortedData[sortedData.length - 1].date;

  const domain: TDateTuple = [firstDate, lastDate];
  const range: TNumberTuple = [0, wrapperWidth];

  const xScale: TimeScale = {
    domain,
    range,
    scale: scaleTime().domain(domain).range(range),
  };

  return xScale;
}

export default useXScale;
