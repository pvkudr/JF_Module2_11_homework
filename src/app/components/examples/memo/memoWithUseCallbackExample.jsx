import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });
    return <button
        className='btn btn-primary'
        onClick={onLogOut}
    >
        LogOut
    </button>;
};
LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) { //  check for rerendering
    if (prevState.onLogOut !== nextState.onLogOut) { return false; }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual); // component, func - return true (do not rerender) or false

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => { // function to avoid rerender - use useCallback
        localStorage.removeItem("auth");
    }, [props]);

    return <>
        <MemoizedLogOutButton onLogOut={handleLogOut}/>
        <button
            className='btn btn-primary'
            onClick={() => { setState(!state); } }
        >
            Initiate Rerender
        </button>

    </>;
};

export default MemoWithUseCallbackExample;
