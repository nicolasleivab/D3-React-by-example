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
    .y((d: TDataItem) => yScale.scale(d.value))
    .defined((d: TDataItem) => d.value !== null);

  const linePath = linePathGenerator(data);

  return <path d={linePath!} stroke="#000" strokeWidth="2" fill="none" />;
}

export default Line;
