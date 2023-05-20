import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOtherState] = useState(true);

    const toggleOtherState = () => {
        setOtherState(!otherState);
    };

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider/>
            <p>render count = {renderCount.current} </p>
            <button className='btn btn-primary' onClick={toggleOtherState}> Click to rerender</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
