import React from 'react';

import './RangeSlider.scss';
import 'nouislider/dist/nouislider.css';
import Nouislider from 'nouislider-react';

type MapDispatchToPropsType = {
  onUpdate: (value: Array<number>) => void;
};

type MapStateToPropsType = {
  startValue: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
};

export type SuperDoubleRangePropsType = MapStateToPropsType & MapDispatchToPropsType;

type StateType = {
  start: number;
};

export class RangeSlider extends React.Component<SuperDoubleRangePropsType, StateType> {
  constructor(props: SuperDoubleRangePropsType) {
    super(props);
    this.state = {
      start: props.startValue,
    };
  }

  render(): React.ReactElement {
    const { min, max, step, disabled, onUpdate } = this.props;
    const { start } = this.state;
    return (
      <span className="rangeSliderContainer">
        <Nouislider
          range={{ min, max }}
          start={start}
          step={step}
          disabled={disabled}
          onUpdate={onUpdate}
          animate={false}
          connect
          tooltips={[
            {
              to(value: number) {
                return Math.round(value);
              },
              from(value: number) {
                return Math.round(value);
              },
            },
          ]}
        />
      </span>
    );
  }
}
