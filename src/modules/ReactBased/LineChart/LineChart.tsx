import Line from '../atoms/Line';
import useXScale from '../hooks/useXScale';
import useYScale from '../hooks/useYScale';

const DATA = [
  {
    value: 1,
    date: new Date('01/01/2022'),
  },
  {
    value: 2,
    date: new Date('02/01/2022'),
  },
  {
    value: 5,
    date: new Date('03/01/2022'),
  },
  {
    value: 3,
    date: new Date('04/01/2022'),
  },
  {
    value: 4,
    date: new Date('05/01/2022'),
  },
];
const WIDTH = 500;
const HEIGHT = 500;

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
