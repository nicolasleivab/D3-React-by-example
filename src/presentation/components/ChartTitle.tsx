import { Flex } from '../layout';
import Title from './Title';

export default function ChartTitle({ imgPath }: { imgPath: string }) {
  return (
    <Flex>
      <Title>Line Chart rendered with</Title>
      <img src={imgPath} alt={imgPath} width={30} style={{ marginLeft: 10 }} />
    </Flex>
  );
}
