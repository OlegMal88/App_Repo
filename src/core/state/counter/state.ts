const COUNTER_FEATURE_KEY = 'counter';

interface State {
  value: number;
}

const initialState: State = {
  value: 0
};

export {
  State,
  COUNTER_FEATURE_KEY,
  initialState
};
