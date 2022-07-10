import React, { Component, memo } from 'react';
import {useEffect, useState, useMemo} from 'react'
import Habit from './habit';
import HabitAddForm from './habitAddForm';


function Habits (props) {
//     const [habits, setHabits] = useState([
//         {id: 1, name: 'Reading', count:0},
//         {id: 2, name: 'Running', count:0},
//         {id: 3, name: 'Coding', count:0}
//     ]);

//     const handleIncrement = (habit) => {
//       const tempHabits =[...habits];
//       const index = tempHabits.indexOf(habit);
//       tempHabits[index].count++;
//       setHabits(tempHabits);
    
//    }

const handleIncrement = (habit) => {
    props.onIncrement(habit);
}


//    const handleDecrement = (habit) => {
//     const tempHabits =[...habits];
//     const index = tempHabits.indexOf(habit);
//     if(tempHabits[index].count > 0)tempHabits[index].count--;
//     setHabits(tempHabits);
//    }

const handleDecrement = (habit) => {
    props.onDecrement(habit);
}

//    const handleDelte = (habit) => {
//     const tempHabits = habits.filter(item => item.id !== habit.id);
//     setHabits(tempHabits);

//    }

const handleDelte = (habit) => {
    props.onDelete(habit);
}

const handleAdd = (name) => {
    props.onAdd(name);
}

const handleReset = () => {
    props.onReset();
}

    return (
        <>
        <HabitAddForm onAdd={handleAdd}></HabitAddForm>
        <ul>
            {
                props.habits.map((habit) => (
                    <Habit key={habit.id} habit={habit} 
                    onIncrement={handleIncrement} 
                    onDecrement={handleDecrement} 
                    onDelete={handleDelte}
                    // 여기서 함수 지정할경우  렌더 함수 할때마다 메모리 먹음
                    />
                ))
            }
        </ul>
        <button className='habits-reset' onClick={handleReset}>Reset</button>
        </>
        
        
    )
}

export default React.memo(Habits);
