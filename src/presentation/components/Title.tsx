import styled from 'styled-components';
import { TSize } from '../styles/types';

interface TTitle extends React.ComponentPropsWithoutRef<'p'> {
  size?: TSize;
}

const Title = styled.p<TTitle>`
  font-size: ${({
    theme: {
      typography: { fontSize },
    },
    size = 'm',
  }) => fontSize[size]};
`;

export default Title;
