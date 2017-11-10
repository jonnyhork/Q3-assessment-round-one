import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar'
import MessageList from './components/MessageList'


const API = process.env.REACT_APP_API_URL


class App extends Component {
  
  state = {
    messages:[],
    searchMessages:[]
  }
  
  async componentDidMount() {
    const messages = await this.getMessages()
    this.setState({
      messages
    })
    console.log('CURRENT SATE OF MESSAGES:', this.state.messages)
  }
  
  async getMessages() {
    const response = await fetch(`${API}/messages`)
    const json = await response.json()
    return json
  }

  
  
  render() {
    return (
      <div className="container">
        <h2>Message Board</h2>
        <ToolBar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
