import React from 'react';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import { SpanBlack, SpanGray } from '../../StyledComponents/Sapans';

export default function Metric({ metric }) {
  return (
    <WrapperRow gap="6px">
      <SpanBlack weight="700" align="end">
        {metric.percent}
      </SpanBlack>
      <SpanGray align="end">{metric.subTitle}</SpanGray>
    </WrapperRow>
  );
}
