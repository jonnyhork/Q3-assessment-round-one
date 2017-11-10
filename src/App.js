import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar'
import MessageList from './components/MessageList'
import AddMessage from './components/AddMessage'

const API = process.env.REACT_APP_API_URL

class App extends Component {
  
  state = {
    messages:[],
    filteredMessages: []
  }
  
  async componentDidMount() {
    const messages = await this.getMessages()
    this.setState({
      messages,
      filteredMessages: null
    })
    // console.log('CURRENT SATE OF MESSAGES:', this.state.messages)
  }
  
  async getMessages() {
    const response = await fetch(`${API}/messages`)
    const json = await response.json()
    return json
  }
  
  async sendMessage(message) {
    
    const response = await fetch(`${API}/messages`,{
      method: 'POST',
      body: JSON.stringify(message),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    
    const newMessage = await response.json()
    
    this.setState({
      messages: [...this.state.messages, newMessage],
      composing: false
    })
  }
  
  async deleteMessage(id) {
    console.log("deleteMessage with id:", id)
    
    await fetch(`${API}/messages/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    
    this.setState({
      messages: this.state.messages.filter( message => message.id !== id)
    })
  }
  
  toggleCompose() {
    this.setState({ composing: !this.state.composing })
  }
  
  messageSearch(searchTerm) {
    const filteredMessages = this.state.messages.filter( message => {
       return ( message.name.match(new RegExp(searchTerm, "ig")) || message.message.match(new RegExp(searchTerm, "ig")) )
    })
    // console.log("filtered Messages:", filteredMessages)
    this.setState({
      filteredMessages
    })
    // console.log("STATE OF FILTERED MESSAGES:", this.state.filteredMessages)
  }

  render() {
    return (
      <div className="container">
        <h2 className="mt-2 display-1">Message Board</h2>
        <ToolBar 
          messages={ this.state.filteredMessages ? this.state.filteredMessages : this.state.messages }
          toggleCompose={ this.toggleCompose.bind(this) }
          onMessageSearch={ this.messageSearch.bind(this) }
        />
        {
          this.state.composing ? <AddMessage sendMessage={this.sendMessage.bind(this)} /> : null
        }
        <MessageList 
        deleteMessage={this.deleteMessage.bind(this)}
        messages={ this.state.filteredMessages ? this.state.filteredMessages : this.state.messages }/>
      </div>
    );
  }
}

export default App;
