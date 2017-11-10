import React from 'react'


  const Message = ({ message, deleteMessage }) => {
    
    const encrypteMessage = (id) => {
      const message = document.getElementById(`${id}`)
      message.classList.toggle("encrypted")
    }
    
    return (
      <li id={message.id} className="list-group-item list-group-item-info d-flex justify-content-between">
        <span>
          <p className="font-weight-bold">
            {message.name} says:
          </p>
        </span>
            {message.message}
        <div>
            <button onClick={() => deleteMessage(message.id)} className="btn btn-danger mr-2">
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            <span>
              <i onClick={() => encrypteMessage(message.id)}className="fa fa-lock" aria-hidden="true"></i>
            </span>
        </div>
      </li>
    )
  }




export default Message