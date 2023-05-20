import React, { useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log(data);
    }, [data]);
    const handleChange = (target) => {
        // const { name, value } = target;
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const result = React.Children.map(children, (child) => { // work with 1 element
       const config = {
           ...child.props,
           onChange: handleChange,
           value: data[child.props.name] || "" // !!!!
       };
        return React.cloneElement(child, config);
    });
    console.log("result", result);
    return result;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
                <TextField name = 'email' label = 'email'/>
                <TextField name = 'password' label = 'password' type = 'password'/>
            </FormComponent>

        </CardWrapper>
    );
};

export default ReactChildrenExample;
