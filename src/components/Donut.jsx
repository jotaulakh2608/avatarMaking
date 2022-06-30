import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

const Donut = () => (
  <div style={{ height: '230px', width: '230px' }}>
    <ChartDonut
      ariaDesc="Average number of pets"
      ariaTitle="Donut chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      subTitle="Pets"
      title="100"
    />
  </div>
)

export  default  Donut