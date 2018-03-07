import { INCREMENT, DECREMENT } from './types'
import {CounterAction} from "./actions";

// https://github.com/piotrwitek/react-redux-typescript-guide#typing-reducer

// type CounterState = {
//     readonly count: number;
// }

// interface AppState extends CounterState {
//
// }

export type CountType = number;

const initialState: number = 0;

export default function counterReducer(state: CountType = initialState, action: CounterAction): CountType {
    switch (action.type) {
        case INCREMENT:
            // return {
            //     ...state,
            //     count: state.count + 1
            // };
            return state + 1;
        case DECREMENT:
            // return {
            //     ...state,
            //     count: state.count - 1
            // };
            return state - 1;
        default:
            return state;
    }
}