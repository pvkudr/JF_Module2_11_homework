import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
const UseRefExercise = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.style.width = "80px";
        inputRef.current.style.height = "150px";
        inputRef.current.children[0].innerText = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={inputRef}
            >
                <small>Блок</small>
            </div>
            <Divider/>
            <button
                className='btn btn-warning'
                onClick = {handleClick}
            >
               Change block
            </button>

        </CollapseWrapper>
    );
};

export default UseRefExercise;
