/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import { SpanBlack, SpanGray } from '../../StyledComponents/Sapans';
import { Balance } from '../Balance/index.balance';

const configBalance = {
  bg: 'transparent',
  metric: { percent: '+2.4%', subTitle: 'from las month' },
};

export function BalanceMonth(props) {
  const condif = { ...configBalance, ...props };
  return (
    <Balance {...condif}>
      <WrapperRow>
        <SpanGray>Total this month</SpanGray>
        <SpanBlack size="2rem" weight="600">$478.33</SpanBlack>
      </WrapperRow>
    </Balance>
  );
}
