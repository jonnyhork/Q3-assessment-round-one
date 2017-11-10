import React, { Component } from 'react'


class ToolBar extends Component {
  
  constructor(props){
    super(props)
    this.state= {
      searchTerm: ''
    }
  }
  
  render(){
    return(
    <div className="row">
      <div className="col-md-6">
        <div className="input-group p-3">
          <input type="text" className="form-control" placeholder="Search" aria-label="Search for a name or message"/>
          <span>
            <button className="btn btn-info" type="button">
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