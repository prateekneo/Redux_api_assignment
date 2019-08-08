import React, { Component } from 'react'
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {user : state.users}
} 

class Avatar_Show extends Component{
    
    render(){

        
        let src = "https://avatars.dicebear.com/v2/avataaars/"+ this.props.user[this.props.i].username + ".svg?options[mood][]=happy";

        return (<div className="avatar">
        <div className="avatar_div">
          <img src={src} alt="Loading"/>
        </div>
  
      </div>)
    }
}
const Avatar = connect(mapStateToProps)(Avatar_Show);


export default Avatar