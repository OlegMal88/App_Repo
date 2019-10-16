import * as CounterState from './counter';

interface ApplicationState {
  [CounterState.COUNTER_FEATURE_KEY]: CounterState.State
}
