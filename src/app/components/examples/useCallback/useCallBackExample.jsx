import React, { useCallback, useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});

    const handleChange = ({ target }) => {
       const { name, value } = target;
        setData(prevState => ({ ...prevState, [name]: value }));
    };
// without callback
    const withoutCallback = useRef(0);

    const validateWithoutCallback = (data) => {
        console.log("data from val_without = ", data);
    };

    useEffect(() => {
        withoutCallback.current++; //  number of rendering function:  withoutCallback.current
    }, [validateWithoutCallback]);

// with callback
    const withCallback = useRef(0);

    const validateWithCallback = useCallback((data) => {
        console.log("data from val_with = ", data);
    }, []);

    useEffect(() => {
        withCallback.current++; //  number of rendering function:  withoutCallback.current
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: { withoutCallback.current}</p>
            <p>Render withCallback: { withCallback.current}</p>
            <label htmlFor="email" className='form-label'>
                Email
            </label>
            <input
                type="email"
                className='form-control'
                id='email'
                onChange={handleChange}
                value = {data.email || ""}
                name = 'email'
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
