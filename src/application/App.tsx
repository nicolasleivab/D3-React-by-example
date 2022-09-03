import { Flex, Block } from '../layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { baseCSS } from '../styles/base';
import { theme } from '../styles/theme';
import { Fragment } from 'react';
import ReactLineChart from './containers/ReactLineChart';

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column">
          <Block width="50%">
            <ReactLineChart />
          </Block>
        </Flex>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
