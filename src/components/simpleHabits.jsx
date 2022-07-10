import React, { useCallback, useRef } from 'react';
import {useEffect, useState} from 'react';

const SimpleHabits = (props) => {

    //괄호 안은 초기값
    const [count, setCount] = useState(0);

    // 반복해서 호출 하기때문에
    // const spanRef = React.createRef();
    
    //ReactHook에서는 
    // 한번 만들고 계속 사용 
    const spanRef = useRef();

    //함수형 일경우 계속해서 재생성 하기때문에 넘겨지는 함수또한 재생섣 되어
    //memo를 사용해도 재 Render 한다.
    //useCallback을 사용하여 해결 
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
        //2번째 인자가 빈 배열일 경우 componetnDidMount
        //값이 전달될 경우 해당 변수가 변경될 경우에만 작동
        // 없을 경우 모든 state가 벼경될 경우 
    }, []);

    //componetDidMount 와 componetDidUpdate가 중복되는 경우가 있어 합쳐놓음 
    useEffect(() => {
        console.log(`mounted & updated! : ${count}`);
    })
    return (
       <li className='habit'>
           <span className='habit-name'>Reading</span>
           <span className='habit-count'>{count}</span>
           <button className='habit-button habit-increase'
            onClick={handleIncrement}
           >
               <i className='fas fa-plus-square'></i>
           </button>
       </li>
    );
};

export default SimpleHabits;