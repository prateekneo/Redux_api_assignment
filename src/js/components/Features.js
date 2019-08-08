import React, { Component } from 'react'
import Modal from './Modal'
import { connect } from "react-redux";
import { LikeUnlike } from "../actions/index";
import { delet } from "../actions/index";

const mapStateToProps = state => {
    return { user: state.users };
  }
  function mapDispatchToProps(dispatch) {
    return {
        LikeUnlike : (i, l) => dispatch(LikeUnlike(i, l)),
        delet : (i) => dispatch(delet(i))
    };
  }


class Features_Show extends Component{

    
    del = () => {
        this.props.delet(this.props.i);
    }
    changeLike = (i, l) => {
        this.props.LikeUnlike(i, l);
    }
    render(){

        
        let modal_id = "#myModal" + this.props.user[this.props.i].id;

        return (<div class="features row">
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
          {(this.props.user[this.props.i].like === 0)?<span class="glyphicon glyphicon-heart-empty heart" onClick={() => this.changeLike(this.props.i, 1)}></span>:<span class="
glyphicon glyphicon-heart heart" onClick={() => this.changeLike(this.props.i, 0)}></span>}
          
        </div> 
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 pencil">
          <span class="glyphicon glyphicon-pencil"  data-toggle="modal" data-target={modal_id}></span>
          <Modal i={this.props.i}  />
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 trash">
          <span class="glyphicon glyphicon-trash" onClick={this.del}></span>
            
        </div>
        </div>)
    }
}
const Features = connect(mapStateToProps, mapDispatchToProps)(Features_Show)

export default Features