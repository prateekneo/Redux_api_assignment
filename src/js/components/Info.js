import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {user : state.users}
}

class Info_Show extends Component{
    
    
    render(){

        
        
        let email = 'http://' + this.props.user[this.props.i].email;
        return (<div className="info">
        <h4>{this.props.user[this.props.i].name}</h4>
        <div className="info_div">
          <div className="email">
          <span class="glyphicon glyphicon-envelope"></span>  {email}
            </div>
          <div className="phone">
          <span class="glyphicon glyphicon-earphone"></span>  {this.props.user[this.props.i].phone}
            </div>
          <div className="website">
          <span class="glyphicon glyphicon-globe"></span>   {this.props.user[this.props.i].website}
            </div>
          </div>
    </div>)
    }
}

const Info = connect(mapStateToProps)(Info_Show)

export default Info