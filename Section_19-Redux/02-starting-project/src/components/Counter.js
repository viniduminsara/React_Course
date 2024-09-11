import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);
    const dispatch = useDispatch();

    const incrementHandler = () => dispatch({ type: 'increment' });

    const decrementHandler = () => dispatch({ type: 'decrement' });

    const increaseBy5Handler = () => dispatch({ type: 'increase', amount: 5 });

    const toggleCounterHandler = () => dispatch({ type: 'toggle' });

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
