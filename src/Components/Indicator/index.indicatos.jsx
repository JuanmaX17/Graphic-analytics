import React from 'react';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import { IndicatorHov } from '../../StyledComponents/hovers';
import { SpanGray } from '../../StyledComponents/Sapans';
import './indicator.css';

export function Indicator({ bg, metric, percent, maxPercent }) {
  const { select, unSelect } = bg;
  console.log('data', maxPercent, percent);
  const bgPercent = maxPercent === percent ? select : unSelect;
  return (
    <WrapperRow>
      <IndicatorHov style={{ background: bgPercent, height: `${percent}px` }} />
      <div className="indicator__percent">{`$ ${percent}`}</div>
      <SpanGray>{metric}</SpanGray>
    </WrapperRow>
  );
}
