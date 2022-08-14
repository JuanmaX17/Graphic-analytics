import React, { Suspense } from 'react';
import { WrapperBetween, WrapperWidth } from '../../StyledComponents/Wrappers';

export function Balance({
  bg, metric, children, width = '90%', pd = '16px 22px',
}) {
  const pathImport = typeof metric === 'string' ? '../Icon/index.icon' : '../Metric/index.metric';
  console.log(typeof metric);
  console.log('suspense', Suspense);
  const SideInfo = React.lazy(() => import(pathImport));
  return (
    <WrapperWidth width={width}>
      <WrapperBetween bg={bg} pd={pd}>
        {children}
        <Suspense fallback="loading...">
          <SideInfo metric={metric} />
        </Suspense>
      </WrapperBetween>
    </WrapperWidth>
  );
}
