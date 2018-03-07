import {combineReducers, Reducer} from 'redux';

import determineCount, {CountType} from './counter/reducer';
import {CounterAction} from "./counter/actions";

// https://github.com/piotrwitek/react-redux-typescript-guide#typing-reducer

export type CounterState = {
    readonly determineCount: CountType;
};

const counterReducer: Reducer<CounterState> = combineReducers<CounterState>({
    // Note: combineReducers() does not enforce the CounterState typing on the fields of its construction obj.
    // However, it does require all those fields to be a Reducer<any>.
    determineCount
});

// Setup root reducer
const rootReducer = (state, action) => {
    const newState = (action.type === 'RESET') ? undefined : state;
    return counterReducer(newState, action);
};

export default rootReducer;