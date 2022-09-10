import { useEffect, useRef, useState } from 'react';
import useWrapperDimensions from '../../hooks/useWrapperDimensions';
import * as d3 from 'd3';
import { TDataItem, TWrapper } from '../../types';
import { Svg } from '../../../layout';
import { HEIGHT } from '../../../../application/constants';

type TLineChart = {
  data: TDataItem[];
};
const margin = { top: 30, right: 30, bottom: 50, left: 60 };

export default function LineChart({ data }: TLineChart) {
  const wrapperRef = useRef(null) as TWrapper;
  const svgRef = useRef(null);
  const [prevItems, setPrevItems] = useState<any>([]);
  const { width, height } = useWrapperDimensions({ wrapperRef });

  useEffect(() => {
    if (Boolean(width) && Boolean(height)) {
      const xScale = d3
        .scaleTime()
        .domain([
          d3.min(data, (d: any) => d.date),
          d3.max(data, (d: any) => d.date),
        ])
        .range([margin.left * 1.5, width - margin.right]);
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d: any) => d.value)])
        .range([height - margin.top * 2, margin.top]);

      const svgEl = d3.select(svgRef.current);
      // svgEl.selectAll('*').remove();
      const svg = svgEl.append('g');
      // .attr('transform', `translate(${margin.left},${margin.top})`);

      const xAxis = d3.axisBottom(xScale).ticks(5).tickSize(10);
      const xAxisGroup = svgEl
        .append('g')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(xAxis);
      xAxisGroup.select('.domain').remove();
      xAxisGroup.selectAll('line').attr('stroke', 'black');
      xAxisGroup
        .selectAll('text')
        .attr('text-anchor', (_d: any, i: number) =>
          i === data.length - 1 ? 'end' : 'center',
        )
        .attr('opacity', 0.5)
        .attr('color', 'black')
        .attr('font-size', '0.75rem');

      const yAxis = d3
        .axisLeft(yScale)
        .ticks(5)
        .tickSize(10)
        .tickFormat((val: any) => `$${val}`);
      const yAxisGroup = svgEl
        .append('g')
        .call(yAxis)
        .attr('transform', `translate(${margin.left}, 0)`);
      yAxisGroup.select('.domain').remove();
      yAxisGroup.selectAll('line').attr('stroke', 'black');
      yAxisGroup
        .selectAll('text')
        .attr('opacity', 0.5)
        .attr('color', 'black')
        .attr('font-size', '0.75rem');

      const line: any = d3
        .line()
        .x((d: any): any => xScale(d.date))
        .y((d: any): any => yScale(d.value));

      svgEl
        .append('g')
        .attr(
          'transform',
          `translate(${margin.left}, ${height - margin.bottom})`,
        )
        .append('line')
        .attr('x0', 0)
        .attr('x1', width)
        .attr('stroke', 'black');

      svgEl
        .append('g')
        .attr('transform', `translate(${margin.left}, ${0})`)
        .append('line')
        .attr('y0', 0)
        .attr('y1', height - margin.bottom)
        .attr('stroke', 'black');

      svg
        .selectAll('g')
        .data([data])
        .enter()
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', '#000000')
        .attr('stroke-width', 2)
        .attr('d', (d: any) => line(d));

      const lines = svgEl.selectAll('path');

      lines.each((d: any, i, nodes) => {
        const element: any = nodes[i];

        const length = element?.getTotalLength();
        if (!prevItems.includes(d.name)) {
          d3.select(element)
            .attr('stroke-dasharray', `${length},${length}`)
            .attr('stroke-dashoffset', length)
            .transition()
            .delay(100)
            .duration(750)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0);
        }
      });
      setPrevItems(data.map(({ value }) => value));
    }

    return () => {
      const svgEl = d3.select(svgRef.current);
      svgEl.selectAll('*').remove();
    };
  }, [data, width, height]);

  return (
    <div ref={wrapperRef} style={{ height: HEIGHT }}>
      <Svg ref={svgRef} />
    </div>
  );
}
