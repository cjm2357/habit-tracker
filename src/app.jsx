
import './app.css';
import {Fragment, useEffect, useMemo, useState} from 'react';
import Habits from './components/habits';
import Navbar from './components/navbar';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
  
  // useEffect(function() {
  //   setHobby(hobby + cnt);
  // }, [cnt]);

  const [habits, setHabits] = useState([
    {id: 1, name: 'Reading', count:0},
    {id: 2, name: 'Running', count:0},
    {id: 3, name: 'Coding', count:0}
  ]);

  // const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
      getTotalCount(habits);
  }, [habits])
  
  const handleIncrement = (habit) => {
    const tempHabits =[...habits];
    const index = tempHabits.indexOf(habit);
    tempHabits[index].count++;
    setHabits(tempHabits);


    
    // const tempHabits = habits.map(item => {
    //     if (item.id === habit.id) {
    //       return {...habit, count: habit.count+1};
    //     } else {
    //      return item;
    //     }
    // })
    // setHabits(tempHabits);
  
 }


 const getTotalCount = (habits) => {
    let cnt = 0;
    habits.map(habit => {
      if(habit.count>0) cnt++;
    })
    //filter length 로도 가능

    console.log(cnt)
    return cnt;
    // setTotalCount(cnt);
   
 }
 
 const handleDecrement = (habit) => {
  const tempHabits =[...habits];
  const index = tempHabits.indexOf(habit);
  if(tempHabits[index].count > 0)tempHabits[index].count--;
  setHabits(tempHabits);

 }

 const handleDelte = (habit) => {
  const tempHabits = habits.filter(item => item.id !== habit.id);
  setHabits(tempHabits);

 }

 const handleAdd = (name) => {
   const tempHabits = [...habits];
   tempHabits.push({id: tempHabits[tempHabits.length - 1].id + 1 , name : name, count:0});
   //동일한 이름일때는 생략이 가능
   setHabits(tempHabits);
 }

 const handleReset = () => {
   const tempHabits = [...habits];
   tempHabits.map(x => x.count = 0);
   setHabits(tempHabits);
 }


  return (
    //fragment 대신에 <>로 표시 
    <Fragment>
        <Navbar totalCount={getTotalCount(habits)}/> 
  <Habits 
    habits ={habits}
    onIncrement={handleIncrement} 
    onDecrement={handleDecrement}
    onDelete={handleDelte}
    onAdd={handleAdd}
    onReset={handleReset}
  />
  {/* <button className='habits-reset' onClick={handleReset}>Reset</button> */}
  </Fragment>
  )
}

export default App;

// const habit = () => {
  
//   const {hobby, setHobby} = useState("게임");
//   const {cnt , setCnt} = useState(0);

//   const alram= () => {
//       alert(hobby);
//       setCnt(cnt+1);
//   }

//   useEffect(function() {
//     setHobby()
//   },[cnt]);


  
//   return <div onclick="alram()">{hobby} 는 {cnt} 번 <button>추가</button></div>
// }
