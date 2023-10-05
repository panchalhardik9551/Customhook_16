import React, { useRef } from 'react'
import useLocalStorage from './comp/UseLocalStorage';

export default function Custom() {

    const [comments, setComments] = useLocalStorage('messages', []);

    const inputref = useRef();

    const addcomment = () => {
      let comment = inputref.current.value;
      setComments([...comments, comment]);
    }
  return (
    <>
      <h1>Task</h1>
      <div>
        <input placeholder='Enter a value' ref={inputref}></input>
        <button onClick={addcomment}>Add</button>
        {
          comments.map((c) => <p>{c}</p>)
        }
      </div>
    </>
  )
}


