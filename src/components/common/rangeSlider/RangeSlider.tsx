import React from 'react';

import './RangeSlider.scss';
import 'nouislider/dist/nouislider.css';
import Nouislider from 'nouislider-react';

import { StateType, RangeSliderPropsType } from './types';

export class RangeSlider extends React.Component<RangeSliderPropsType, StateType> {
  constructor(props: RangeSliderPropsType) {
    super(props);
    this.state = {
      start: props.startValue,
    };
  }

  render(): React.ReactElement {
    const { min, max, step, disabled, onUpdate } = this.props;
    const { start } = this.state;

    return (
      <div className='rangeSliderContainer'>
        <Nouislider
          animate={false}
          connect={true}
          disabled={disabled}
          onUpdate={onUpdate}
          range={{ min, max }}
          start={start}
          step={step}
        />
      </div>
    );
  }
}
