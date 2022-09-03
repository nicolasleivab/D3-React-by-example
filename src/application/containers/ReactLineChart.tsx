import { useRef } from 'react';
import LineChart from '../../modules/ReactBased/LineChart/LineChart';
import { Card } from '../../layout';
import { DATA, HEIGHT } from '../constants';
import { TWrapper } from '../../modules/types';
import useWrapperDimensions from '../hooks/useWrapperDimensions';

export default function ReactLineChart() {
  const wrapperRef = useRef(null) as TWrapper;
  const dimensions = useWrapperDimensions({ wrapperRef });

  return (
    <Card>
      <div ref={wrapperRef} style={{ height: HEIGHT }}>
        <LineChart dimensions={dimensions} data={DATA} />
      </div>
    </Card>
  );
}
