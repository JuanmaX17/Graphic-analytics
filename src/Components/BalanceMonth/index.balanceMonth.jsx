/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import { SpanBlack, SpanGray } from '../../StyledComponents/Sapans';
import { Balance } from '../Balance/index.balance';

const configBalance = {
  bg: 'transparent',
  metric: { percent: '+2.2%', subTitle: 'from las month' },
};

export function BalanceMonth({ value, ...rest }) {
  const config = { ...configBalance, ...rest };
  return (
    <Balance {...config}>
      <WrapperRow>
        <SpanGray>Total this month</SpanGray>
        <SpanBlack size="2rem" weight="600">
          ${value}
        </SpanBlack>
      </WrapperRow>
    </Balance>
  );
}
