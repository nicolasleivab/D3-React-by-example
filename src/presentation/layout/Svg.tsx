import styled from 'styled-components';

interface TSvg extends React.ComponentPropsWithRef<'svg'> {}

const Svg = styled.svg<TSvg>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
`;

export default Svg;
