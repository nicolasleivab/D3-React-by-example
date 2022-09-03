import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';
import { Svg } from '../../../layout';
import type { TDataItem, TDimensions } from '../../types';

type TLineChart = {
  dimensions: TDimensions;
  data: TDataItem[];
};

function LineChart({ dimensions, data }: TLineChart) {
  const xScale = useXScale({ data, width: dimensions.width });
  const yScale = useYScale({ data, height: dimensions.height });

  return (
    <Svg>
      <g>
        <Line data={data} xScale={xScale} yScale={yScale} />
      </g>
    </Svg>
  );
}

export default LineChart;
