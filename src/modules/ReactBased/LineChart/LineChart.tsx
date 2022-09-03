import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';
import { DATA, WIDTH, HEIGHT } from '../../constants';

function LineChart() {
  const xScale = useXScale({ data: DATA, width: WIDTH });
  const yScale = useYScale({ data: DATA, height: HEIGHT });

  return (
    <svg width={WIDTH} height={HEIGHT}>
      <g>
        <Line data={DATA} xScale={xScale} yScale={yScale} />
      </g>
    </svg>
  );
}

export default LineChart;
