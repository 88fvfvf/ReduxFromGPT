import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { enterText } from "../../features/Advanced";

const Input = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.inputSlice.value)

    return (
        <div>
            <input type="text" value={value} onChange={(e) => dispatch(enterText(e.target.value))}/>
            <h2>
                {value}
            </h2>
        </div>
    )
}

export default Input