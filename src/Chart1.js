import React, { useState, useEffect } from 'react';
import { Histogram } from '@ant-design/charts';

const data = require('./PathSam.json')

function Chart1() {

    var config = {
      data: data,
      binField: 'BraTS21ID',
      binWidth: 101,
      tooltip: {
        showMarkers: false,
        position: 'top',
      },
      interactions: [{ type: 'element-highlight' }],
      meta: {
        range: {
          min: 0,
          tickInterval: 1010,
        },
        count: {
          max: 20,
          nice: true,
        },
      },
    };
    return <Histogram {...config} />;
  };
  
  export default Chart1;