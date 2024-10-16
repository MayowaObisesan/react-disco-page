import { useState } from "react";

function Counter() {
    const [buttonValue, setButtonValue] = useState(2);

    function handleClickButton() {
        // My logic goes here.
        const newButtonValue = buttonValue * 2;
        setButtonValue(newButtonValue);
    }

    return (
        <button onClick={handleClickButton}>{buttonValue}</button>
    )
}

export default Counter;