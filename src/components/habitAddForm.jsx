import React, { Component } from 'react';
import {useEffect, useState} from 'react';

function HabitAddForm (props) {


    //공식홈페이지 refs 와 dom 
    // react는 쿼리셀렉터를 이용해 값을 가져오지 않을 수 있다.
    // ref를 통해 해당 tag의 value를 가져온다. 

    var inputRef = React.createRef();

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log(inputRef.current.value);
        const name = inputRef.current.value;
        if (name) {
            props.onAdd(name)
        }
        inputRef.current.value = '';
    }


    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input ref = {inputRef} type='text' className='add-input' placeholder="please input your habit"></input>
            <button className="add-button">add</button>
        </form>
    );
}

export default HabitAddForm;