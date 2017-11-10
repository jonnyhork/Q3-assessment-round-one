import React from 'react'


  const Message = ({ message, deleteMessage }) => {
    
    return (
      <li className="list-group-item list-group-item-info d-flex justify-content-between">
        <span>
          <p className="font-weight-bold">
            {message.name} says:
          </p>
        </span>
            {message.message}
        <button onClick={() => deleteMessage(message.id)}className="btn btn-danger">
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </li>
    )
  }




export default Message