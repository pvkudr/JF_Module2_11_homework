import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
// wrapping to count rendering number
function runFactorial(n) {
    console.log("run factorial", n);
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const fact = useMemo(() => runFactorial(value), [value]); // will not re-render with rerender button

    const [otherState, setOtherState] = useState(false); // for re-render
    const buttonColor = otherState ? "primary" : "secondary";
    useMemo(() => runFactorial(value), [value]);

    useEffect(() => {
        console.log("rendering", fact);
    });

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value = {value}</p>
                <p>Result =  {fact}</p>
                <button
                    className='btn btn-primary'
                    onClick = {() => setValue(prevState => prevState + 10)}
                >
                    Value + 10
                </button>

                <> </>

                <button
                    className='btn btn-primary'
                    onClick = {() => setValue(prevState => prevState - 10)}
                >
                    Value - 10
                </button>

            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + buttonColor}
                    onClick = {() => { setOtherState(prevState => !prevState); }}
                >
                    Change color / rerender
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
