import { Flex, Block } from '../presentation/layout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { baseCSS } from '../presentation/styles/base';
import { theme } from '../presentation/styles/theme';
import { Fragment } from 'react';
import ReactLineChart from './containers/ReactLineChart';
import D3LineChart from './containers/D3LineChart';
import Header from '../presentation/components/Header';
import Title from '../presentation/components/Title';

const GlobalStyle = createGlobalStyle`
  ${baseCSS}
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Flex flexDirection="column">
          <Block>
            <Header />
          </Block>
          <Title>React rendered Line Chart</Title>
          <Block width="50%">
            <ReactLineChart />
          </Block>
          <Title>D3 rendered Line Chart</Title>
          <Block width="50%">
            <D3LineChart />
          </Block>
        </Flex>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
