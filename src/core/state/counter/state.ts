const COUNTER_FEATURE_KEY = 'counter';

interface State {
  counter: number;
}

const initialState: State = {
  counter: 0
};

export {
  State,
  COUNTER_FEATURE_KEY,
  initialState
};
