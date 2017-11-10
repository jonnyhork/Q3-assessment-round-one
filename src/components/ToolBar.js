import React, { Component } from 'react'

class ToolBar extends Component {
 
  constructor(props){
    super(props)
    this.state= {
      searchTerm: ''
    }
  }
  
  onSearchInputChange(searchTerm) {
    this.setState({
      searchTerm
    })
    this.props.onMessageSearch(searchTerm)
  }
  
  render() {
    return (
    <div className="row">
      <div className="col-md-6">
      <h4>
        Total Messages:<span className="badge badge-pill badge-light">{this.props.messages.length}</span>
      </h4>
        <div className="input-group p-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search for a name or message"
          value={this.state.searchTerm}
          onChange= {
            (e) => this.onSearchInputChange(e.target.value)
          }
          />
          <span>
            <button onClick={() => this.props.toggleCompose()} className="btn btn-info ml-2" type="button">
              <i className={`fa fa-plus pr-2`}></i>
              Say Something!
            </button>
          </span>
        </div>
      </div>
    </div>
    )
  }  
}






export default ToolBar