/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Wrapper } from './StyledComponents/Wrappers';
import { BalanceHead } from './Components/BalanceHead/index.BalanceHead';
import { Analytics } from './Components/Analytics/index.analitycs';
import './App.css';

function App() {
  return (
    <Wrapper gap="20px" maxWd="840px">
      Bienvenido
      <BalanceHead />
      <Analytics />
    </Wrapper>
  );
}

export default App;
