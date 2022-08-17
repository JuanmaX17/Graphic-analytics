import React from 'react';
import { WrapperWidth } from '../../StyledComponents/Wrappers';
import { Statistics } from '../Statistics/index.statistics';
import { BalanceMonth } from '../BalanceMonth/index.balanceMonth';
import './analytics.css';

export function Analytics() {
  const value = 478.33;
  return (
    <WrapperWidth
      className="analytics"
      width="90%"
      rows="auto auto auto"
      pd="32px 22px"
    >
      <h1>Spending - Last 7 days</h1>
      <Statistics value={value} />
      <BalanceMonth width="100%" pd="0" value={value} />
    </WrapperWidth>
  );
}
