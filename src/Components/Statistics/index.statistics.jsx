/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Indicator } from '../Indicator/index.indicatos';
import './statistics.css';

const unSelect = 'var(--Soft-red)';
const select = 'var(--Cyan)';

const config = [
  {
    percent: 80,
    index: 'mon',
  },
  {
    percent: 50,
    index: 'tue',
  },
  {
    percent: 110,
    index: 'wed',
  },
  {
    percent: 60,
    index: 'thu',
  },
  {
    percent: 90,
    index: 'fri',
  },
  {
    percent: 58.33,
    index: 'sat',
  },
  {
    percent: 50,
    index: 'sun',
  },
];
export function Statistics() {
  const [visible, setVisible] = useState([]);
  const bg = { select, unSelect };
  const maxPercent = config.reduce(
    (acc, item) => (item.percent > acc ? item.percent : acc),
    0
  );
  const configIndicator = (index, percent) => ({
    key: index,
    metric: index,
    percent,
    handleVisibility: setVisible,
    visible,
    bg,
    maxPercent,
  });
  return (
    <div className="statisticsBox">
      {config.map(({ index, percent }) => (
        <Indicator {...configIndicator(index, percent)} />
      ))}
    </div>
  );
}
