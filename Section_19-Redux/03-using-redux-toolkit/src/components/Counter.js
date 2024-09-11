import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from '../store/index';

const Counter = () => {

    const counter = useSelector(state => state.counter.value);
    const show = useSelector(state => state.counter.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch(counterActions.increment());

    const decrementHandler = () => dispatch(counterActions.decrement());

    const increaseBy5Handler = () => dispatch(counterActions.increase(5));

    const toggleCounterHandler = () => dispatch(counterActions.toggle());

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{show && counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseBy5Handler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
