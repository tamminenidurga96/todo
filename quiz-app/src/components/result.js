import React, { useContext } from 'react'
import { MyContext } from '../App';

 export function Result() {

  const {Score} = useContext(MyContext)
  return (
    <div>
      <h3> your total score is out of 3 is {Score} </h3>
    </div>
  )
}

export default Result;
