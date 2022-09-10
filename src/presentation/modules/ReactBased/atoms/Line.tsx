import { forwardRef } from 'react';
import type { LinearScale, TDataItem, TimeScale } from '../../types';
import useAnimatedPath from '../../hooks/useAnimatedPath';
import { animated } from 'react-spring';
import { LegacyRef } from 'react';
import { line } from 'd3-shape';

type TLine = {
  data: TDataItem[];
  xScale: TimeScale;
  yScale: LinearScale;
  length: number;
  toggle: boolean;
};

const Line = forwardRef(
  (
    { data, xScale, yScale, length, toggle }: TLine,
    ref: LegacyRef<SVGPathElement>,
  ) => {
    const linePathGenerator = line<TDataItem>()
      .x((d: TDataItem) => xScale.scale(d.date))
      .y((d: TDataItem) => yScale.scale(d.value))
      .defined((d: TDataItem) => d.value !== null);

    const linePath = linePathGenerator(data);

    if (length === 0) {
      return <path ref={ref} d={linePath!} fill="none" stroke="none" />;
    }

    const animationProps = useAnimatedPath({
      duration: 750,
      delay: 0,
      length,
      toggle,
    });

    return (
      <animated.path
        {...animationProps}
        d={linePath!}
        stroke={'#000'}
        strokeWidth="2"
        fill="none"
      />
    );
  },
);

export default Line;
