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
        the search term is: {this.state.searchTerm}
        <div className="input-group p-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search for a name or message"
          value={this.state.searchTerm}
          onChange= {
            (e) => this.onSearchInputChange(e.target.value)
          }
          />
          <span>
            <button onClick={() => this.props.toggleCompose()} className="btn btn-info" type="button">
              <i className={`fa fa-plus`}></i>
              Add
            </button>
          </span>
        </div>
      </div>
    </div>
    )
  }  
}






export default ToolBar