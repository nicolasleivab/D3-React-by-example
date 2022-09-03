import { useRef } from 'react';
import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';
import { DATA, HEIGHT } from '../../constants';
import { Svg } from '../../../layout';
import type { TWrapper } from '../../types';

function LineChart() {
  const wrapperRef = useRef(null) as TWrapper;

  const xScale = useXScale({ data: DATA, wrapper: wrapperRef });
  const yScale = useYScale({ data: DATA, wrapper: wrapperRef });

  return (
    <div ref={wrapperRef} style={{ height: HEIGHT }}>
      <Svg>
        <g>
          <Line data={DATA} xScale={xScale} yScale={yScale} />
        </g>
      </Svg>
    </div>
  );
}

export default LineChart;
