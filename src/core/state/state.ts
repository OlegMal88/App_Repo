import * as Counter from '@state/counter';
import {COUNTER_FEATURE_KEY} from '@state/counter/state';
import {ROOT_REDUCER_KEY} from '@state/root/state';
import * as Root from '@state/root';

interface State {
  [COUNTER_FEATURE_KEY]: Counter.state.State;
  [ROOT_REDUCER_KEY]: Root.state.State;
}

export {
  State,
  Root,
  Counter,
};
