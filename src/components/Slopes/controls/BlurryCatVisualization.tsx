import React from 'react';
import { Spring } from 'react-spring';

import Pixellate from '../../Pixellate';

const catSrc = '/images/cat-viz.svg';

const BlurryCatVisualization = ({ value, size, isAnimated }) => {
  return (
    <Spring
      to={{ value }}
      immediate={!isAnimated}
      config={{ tension: 70, friction: 20 }}
    >
      {interpolated => (
        <Pixellate
          value={interpolated.value}
          size={size}
          aspectRatio={1.446}
          src={catSrc}
        />
      )}
    </Spring>
  );
};

export default BlurryCatVisualization;
