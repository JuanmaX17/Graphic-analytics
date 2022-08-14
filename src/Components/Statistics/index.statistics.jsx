/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Indicator } from '../Indicator/index.indicatos';
import './statistics.css';

const config = [
  {
    bg: 'red',
    percent: '70',
    index: 'mon',
  },
  {
    bg: 'red',
    percent: '50',
    index: 'tue',
  },
  {
    bg: 'blue',
    percent: '90',
    index: 'wed',
  },
  {
    bg: 'red',
    percent: '40',
    index: 'thu',
  },
  {
    bg: 'red',
    percent: '70',
    index: 'fri',
  },
  {
    bg: 'red',
    percent: '74',
    index: 'sat',
  },
  {
    bg: 'red',
    percent: '20',
    index: 'sun',
  },

];
export function Statistics() {
  const [visible, setVisible] = useState([]);
  const configIndicator = (index, percent, bg) => ({
    key: index,
    metric: index,
    percent,
    bg,
    handleVisibility: setVisible,
    visible,
  });
  return (
    <div className="statisticsBox">
      {
        config.map(({ index, percent, bg }) => (
          <Indicator {...configIndicator(index, percent, bg)} />
        ))
      }
    </div>
  );
}
