export type MapDispatchToPropsType = {
  onUpdate: (value: Array<number>) => void;
};

export type MapStateToPropsType = {
  startValue: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
};

export type RangeSliderPropsType = MapStateToPropsType & MapDispatchToPropsType;

export type StateType = {
  start: number;
};
