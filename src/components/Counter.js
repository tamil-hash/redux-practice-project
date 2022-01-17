import { useEffect } from "react";
import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(counter);
  }, []);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={() => dispatch(counterActions.increment())}>
              Increment
            </button>
            <button onClick={() => dispatch(counterActions.decrement())}>
              Decrement
            </button>
            <button onClick={() => dispatch(counterActions.increase(10))}>
              Increase by 10
            </button>
          </div>
        </>
      )}

      <button onClick={() => dispatch(counterActions.toggle())}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
