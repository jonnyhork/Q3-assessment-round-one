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
  
  toggleCompose() {
    this.setState({ composing: !this.state.composing })
  }
  
  messageSearch(searchTerm) {
    const filteredMessages = this.state.messages.filter( message => {
       return (message.name.match(new RegExp(searchTerm, "ig")) || message.message.match(new RegExp(searchTerm, "ig")))
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
        <h2>Message Board</h2>
        <ToolBar 
          toggleCompose={this.toggleCompose.bind(this)}
          onMessageSearch={ this.messageSearch.bind(this) }
        />
        {
          this.state.composing ? <AddMessage /> : null
        }
        <MessageList messages={this.state.filteredMessages ? this.state.filteredMessages : this.state.messages}/>
      </div>
    );
  }
}

export default App;
