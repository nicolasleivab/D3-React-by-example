import { forwardRef } from 'react';
import type { LinearScale, TDataItem, TimeScale } from '../../types';
import useAnimatedPath from '../../hooks/useAnimatedPath';
import { animated } from 'react-spring';
import { line } from 'd3-shape';

type TLine = {
  data: TDataItem[];
  xScale: TimeScale;
  yScale: LinearScale;
  length: number;
  toggle: boolean;
  isVisible?: boolean;
};

const Line = forwardRef(
  ({ isVisible = true, data, xScale, yScale, length, toggle }: TLine, ref) => {
    const linePathGenerator = line<TDataItem>()
      .x((d: TDataItem) => xScale.scale(d.date))
      .y((d: TDataItem) => yScale.scale(d.value))
      .defined((d: TDataItem) => d.value !== null);

    const linePath = linePathGenerator(data);

    const animationProps: any = useAnimatedPath({
      duration: 750,
      delay: 0,
      length,
      toggle,
    });

    return (
      <animated.path
        ref={ref}
        {...animationProps}
        // strokeDasharray={animationProps.strokeDasharray}
        // strokeDashoffset={animationProps.strokeDashoffset}
        d={linePath}
        stroke={isVisible ? '#000' : 'none'}
        strokeWidth="2"
        fill="none"
      />
    );
  },
);

export default Line;
