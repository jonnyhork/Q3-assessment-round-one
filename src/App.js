import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolBar from './components/ToolBar'
import MessageList from './components/MessageList'




class App extends Component {
  
  state = {
    messages:[],
    searchMessages:[]
  }
  
  // async componentDidMount()
  
  // get messages method
    // ${REACT_APP_API_URL}/messages

  
  render() {
    return (
      <div className="container">
        <h2>Message Board</h2>
        <ToolBar />
        <MessageList />
      </div>
    );
  }
}

export default App;
