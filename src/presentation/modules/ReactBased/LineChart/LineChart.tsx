import { useRef } from 'react';
import useWrapperDimensions from '../../hooks/useWrapperDimensions';
import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';
import { Svg } from '../../../layout';
import type { TDataItem, TWrapper } from '../../types';
import { HEIGHT } from '../../../../application/constants';
import VerticalNumericalAxis from '../atoms/VerticalNumericalAxis';
import HorizontalTimeAxis from '../atoms/HorizontalTimeAxis';

type TLineChart = {
  data: TDataItem[];
};

function LineChart({ data }: TLineChart) {
  const wrapperRef = useRef(null) as TWrapper;
  const { width, height } = useWrapperDimensions({ wrapperRef });

  const xScale = useXScale({ data, width: width });
  const yScale = useYScale({ data, height: height });

  return (
    <div ref={wrapperRef} style={{ height: HEIGHT }}>
      <Svg>
        <g>
          <Line data={data} xScale={xScale} yScale={yScale} />
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
