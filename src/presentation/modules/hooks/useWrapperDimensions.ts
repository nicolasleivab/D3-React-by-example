import { useEffect, useState } from 'react';
import { TWrapper, TDimensions } from '../types';
import { debounce } from '../utils/debounce';

export default function useWrapperDimensions({
  wrapperRef,
}: {
  wrapperRef: TWrapper;
}) {
  const [dimensions, setDimensions] = useState<TDimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const { width, height } = wrapperRef?.current?.getBoundingClientRect()!;

    const debouncedHandleResize = debounce(
      () =>
        setDimensions({
          width,
          height,
        }),
      333,
    );

    window.addEventListener('resize', debouncedHandleResize);

    if (dimensions.width !== width) {
      debouncedHandleResize();
    }

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return dimensions;
}
