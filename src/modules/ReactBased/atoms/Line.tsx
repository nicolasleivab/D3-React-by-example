import type { LinearScale, TDataItem, TimeScale } from '../../types';
import { line } from 'd3-shape';

type TLine = {
  data: TDataItem[];
  xScale: TimeScale;
  yScale: LinearScale;
};

function Line({ data, xScale, yScale }: TLine) {
  const linePathGenerator = line<TDataItem>()
    .x((d: TDataItem) => xScale.scale(d.date))
    .y((d: TDataItem) => yScale.scale(d.value));

  const linePath = linePathGenerator(data);

  return <path d={linePath!} />;
}

export default Line;
