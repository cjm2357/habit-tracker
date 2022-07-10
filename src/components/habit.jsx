import React, { Component } from 'react';
import {useEffect, useStatem, useMemo} from 'react';

// class habit extends Component {
//     render() {
//         return (
//             <>
//         <li className='habit'>

//             <span classNmae="habit-name">Reading</span>
//             <span className="habit-count">8</span>
//             <button className="habit-button habit-increase ">
//                     <i className='fas fa-plus-square'></i>
//             </button>
//             <button className="habit-button habit-decrease">
//                     <i className='fas fa-minus-square'></i>
//             </button>
//             <button className="habit-button habit-delete">
//                     <i className='fas fa-trash'></i> 
//             </button>
//        </li>
//        </>
//         );
//     }
// }

function Habit (props) {


     // const [count, setCount] = useState(props.habit.count);


     // function upCount() {

     //      // count += 1 할시 state가 업데이트 됬는지 모른다. 
     //      setCount(count+1);
     // }

    

     const handleIncrement = () => {
          console.log("props", props.onIncrement);
          // props.onIncrement(props.habit);
     }

     const handleDecrement = () => {
          props.onDecrement(props.habit);
     }



     const handleDelte = () => {
          props.onDelete(props.habit);
     }

     // function downCount() {
     //      if(count<=0) return;
     //      setCount(count-1);
     // }

    return (
        <li className='habit'>
       <span className="habit-name">{props.habit.name}</span>
       <span className="habit-count">{props.habit.count}</span>
       <button className="habit-button habit-increase" onClick={() => {props.onIncrement(props.habit)}}>
            <i className='fas fa-plus-square'></i>
       </button>
       <button className="habit-button habit-decrease" onClick={handleDecrement}>
            <i className='fas fa-minus-square'></i>
       </button>
       <button className="habit-button habit-delete" onClick={handleDelte}>
            <i className='fas fa-trash'></i> 
       </button>
       </li>
    );
}

export default React.memo(Habit);