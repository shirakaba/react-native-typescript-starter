import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import * as CounterActions from '../redux/counter/actions';
import { connect } from 'react-redux';
import {CounterState} from "../redux";

interface Props {
    count: number,
    increment: () => any,
    decrement: () => any
}

class CounterContainer extends Component<Props, {}> {
    intervalId: number;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.props.increment();
        }, 1000)
    }

    render() {
        return (
            <Counter
                {...this.props} />
        );
    }
}

export default connect((state: CounterState) => ({
    // 'determineCount' is the name given to the default export of: redux/counter/reducer.ts
    // ... when imported into the module: redux/index.ts
    // ... into counterReducer.
    count: state.determineCount
}), (dispatch) => ({
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement())
}))(CounterContainer);