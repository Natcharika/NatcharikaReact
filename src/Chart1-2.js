import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';

const data = require('./PathSam.json')

function Chart1Val(){
    var config = {
        data: data,
        xField: 'BraTS21ID',
        yField: 'MGMT_value',
        label: {},
        point: {
          size: 5,
          shape: 'diamond',
          style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
          },
        },
        tooltip: { showMarkers: false },
        state: {
          active: {
            style: {
              shadowBlur: 4,
              stroke: '#000',
              fill: 'red',
            },
          },
        },
        interactions: [{ type: 'marker-active' }],
      };
      return <Line {...config} />;
}

export default Chart1Val;