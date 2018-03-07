import { INCREMENT, DECREMENT } from './types'

export type CounterAction = {
    type: INCREMENT|DECREMENT;
}

export function increment(): CounterAction {
    return {
        type: INCREMENT
    }
}

export function decrement(): CounterAction {
    return {
        type: DECREMENT
    }
}