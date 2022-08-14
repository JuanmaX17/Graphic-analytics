/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import logo from '../../assets/logo.svg';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import { SpanWhite } from '../../StyledComponents/Sapans';
import { Balance } from '../Balance/index.balance';

const configBalance = {
  bg: 'var(--Soft-red)',
  metric: logo,
};

export function BalanceHead(props) {
  const propsDwon = { ...configBalance, ...props };
  return (
    <Balance {...propsDwon}>
      <WrapperRow>
        <SpanWhite>My balance</SpanWhite>
        <SpanWhite size="1.6rem" weight="600">$921.48</SpanWhite>
      </WrapperRow>
    </Balance>
  );
}
