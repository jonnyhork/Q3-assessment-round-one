import React from 'react'

const AddMessage = ({ sendMessage }) => {
  
  const submitMessage = (e) => {
    e.preventDefault()
    
    sendMessage({
      name: e.target.name.value,
      message: e.target.message.value
    })
  }
  
  return (
    <form onSubmit={ submitMessage }>
      <div className="form-row p-3">
        <div className="col">
          <input type="text" name="name" className="form-control" id="newMessageName" placeholder="name"/>
        </div>
        <div className="col-7">
          <input type="text" name="message" className="form-control" id="newMessageBody" placeholder="new message"/>
        </div>
        <button type="submit" className="btn btn-info">
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  )
}


export default AddMessage