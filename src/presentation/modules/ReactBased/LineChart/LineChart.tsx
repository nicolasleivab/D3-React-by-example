import { useRef, useEffect, useState } from 'react';
import useWrapperDimensions from '../../hooks/useWrapperDimensions';
import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';
import { Svg } from '../../../layout';
import type { TDataItem, TPathRef, TWrapper } from '../../types';
import { HEIGHT } from '../../../../application/constants';
import VerticalNumericalAxis from '../atoms/VerticalNumericalAxis';
import HorizontalTimeAxis from '../atoms/HorizontalTimeAxis';

type TLineChart = {
  data: TDataItem[];
};

function LineChart({ data }: TLineChart) {
  const [pathLength, setPathLength] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const wrapperRef = useRef(null) as TWrapper;
  const pathRef = useRef(null) as TPathRef;
  const { width, height } = useWrapperDimensions({ wrapperRef });

  const xScale = useXScale({ data, width: width });
  const yScale = useYScale({ data, height: height });

  useEffect(() => {
    if (pathRef?.current) {
      const length = pathRef?.current?.getTotalLength();
      setPathLength(length);
      console.log(pathLength);
    }
    setTimeout(() => setToggle(true), 350);
  }, [width]);

  return (
    <div ref={wrapperRef} style={{ height: HEIGHT }}>
      <Svg>
        <g>
          <Line
            ref={pathRef}
            data={data}
            xScale={xScale}
            yScale={yScale}
            length={pathLength}
            toggle={toggle}
          />
        </g>
        <g>
          <VerticalNumericalAxis height={height} />
        </g>
        <g>
          <HorizontalTimeAxis width={width} height={height} />
        </g>
      </Svg>
    </div>
  );
}

export default LineChart;
