import { createReducer } from '@ngrx/store';

export interface State {
  count: number;
}

const initialState: State = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  //on('INCREMENT', (state) => ({ ...state, count: state.count + 1 })),
  //on('DECREMENT', (state) => ({ ...state, count: state.count - 1 }))
);

export const reducers = {
  count: counterReducer
};
