interface State {
  page: string;
}

const initialState: State = {
  page: 'Default'
};

const ROOT_REDUCER_KEY = 'root';

export {
  State,
  initialState,
  ROOT_REDUCER_KEY
};
