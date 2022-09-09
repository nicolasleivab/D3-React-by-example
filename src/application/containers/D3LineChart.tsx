import LineChart from '../../presentation/modules/D3Based/LineChart/LineChart';
import { Card } from '../../presentation/layout';
import useApi from '../api/useApi';
import type { TDataItem } from '../../presentation/modules/types';

export default function ReactLineChart() {
  const { data, loading, error } = useApi();

  const formattedData: TDataItem[] = data.map(({ time, priceUsd }) => {
    return {
      date: new Date(time),
      value: Number(priceUsd),
    };
  });

  if (error) {
    return <span>{error}</span>;
  }

  if (loading) {
    return <span>loading...</span>;
  }

  return (
    <Card>
      <LineChart data={formattedData} />
    </Card>
  );
}
