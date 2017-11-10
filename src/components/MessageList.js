import React from 'react'
import Message from './Message'


const MessageList = ({ messages, deleteMessage }) => {
  return (
    <ul className="list-group">
      {messages.map( message => <Message key={message.id} message={message} deleteMessage={deleteMessage} />)}
    </ul>
  )
}



export default MessageList