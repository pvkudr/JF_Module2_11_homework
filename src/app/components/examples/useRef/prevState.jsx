import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const PrevStateExample = () => {
    const preState = useRef("");
    const [otherState, setOtherState] = useState("false");

    const toggleOtherState = () => {
        setOtherState(prevState => prevState === "false" ? "true" : "false");
    };

    useEffect(() => {
        preState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <p>prev state = {preState.current} </p>
            <p>current state = {otherState} </p>
            <button className='btn btn-primary' onClick={toggleOtherState}>
                Click to rerender
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
