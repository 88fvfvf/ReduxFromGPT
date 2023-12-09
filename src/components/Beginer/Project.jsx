import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/slice";

const Project = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Project;
