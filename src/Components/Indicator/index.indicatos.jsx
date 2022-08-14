import React, { useEffect, useRef } from 'react';
import { WrapperRow } from '../../StyledComponents/Wrappers';
import './indicator.css';

export function Indicator({
  bg, metric, percent, visible, handleVisibility,
}) {
  const refIndicator = useRef();
  useEffect(() => {
    console.log('esto', refIndicator.current);
    refIndicator.current.onmouseover = () => handleVisibility([metric]);
  }, []);
  const visibility = visible.some((item) => {
    console.log(item, 'esss', metric);
    return item === metric;
  });
  return (
    <WrapperRow>
      <div className={`indicator__percent ${visibility && 'visible'}`}>{`$ ${percent * 2}`}</div>
      <div className="indicator" style={{ background: bg, height: `${percent * 1.4}px` }} ref={refIndicator} />
      <span>{metric}</span>
    </WrapperRow>
  );
}
