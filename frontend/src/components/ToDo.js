import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai' ;
function ToDo(props ) {
  return (
    <div>
      <div className="todo">
        <div className="text">{props.text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={props.updateMode}/>
            <AiFillDelete className='icon' onClick={props.deleteTodo}/>
        </div>
      </div>
    </div>
  )
}

export default ToDo
