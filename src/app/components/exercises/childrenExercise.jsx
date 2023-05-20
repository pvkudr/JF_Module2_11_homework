import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const result = React.Children.map(children, (child, index) => { // work with 1 element
        const config = {
            ...child.props,
            index: index
        };
        return React.cloneElement(child, config);
    });
    return result;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <FormComponent>
                <Component />
                <Component />
                <Component />
            </FormComponent>

        </CollapseWrapper>
    );
};

const Component = ({ index }) => {
    return <div>Компонент списка, порядковый номер =  { index + 1} </div>;
};

Component.propTypes = {
    index: PropTypes.number
};

export default ChildrenExercise;
