import React, { Component } from 'react'
import { connect } from "react-redux";
import { editData } from "../actions/index";

const mapStateToProps = state => {
    return {user : state.users}
}

function mapDispatchToProps(dispatch) {
    return {
      editData: (obj,i) => dispatch(editData(obj,i))
    };
  }

class Modal_Show extends Component{
    constructor(props){
        super(props);

        this.state = {
          name : this.props.user[this.props.i].name,
          email : this.props.user[this.props.i].email,
          phone : this.props.user[this.props.i].phone,
          website : this.props.user[this.props.i].website,
          like : 1
        };
    }

    edit_field = (field, name_id) => {
        
        let val;
        if(field === 'name'){
          val = document.getElementById(name_id).value;
          this.setState({
            name : val
          })
        }
        else if (field === 'email'){
          val = document.getElementById(name_id).value;
          this.setState({
            email : val
          })
        }
        else if (field === 'phone'){
          val = document.getElementById(name_id).value;
          this.setState({
            phone : val
          })
        }
        else if (field === 'website'){
          val = document.getElementById(name_id).value;
          this.setState({
            website : val
          })
        }

        //this.props.change_field(val, this.props.i, field);
    }

    submitFunc = (e) => {
        
        e.preventDefault();
        
        let obj = {
         name : this.state.name,
         email : this.state.email,
         phone : this.state.phone,
         website : this.state.website
        }
        this.setState({
            name : this.props.user[this.props.i].name,
            email : this.props.user[this.props.i].email,
            phone : this.props.user[this.props.i].phone,
            website : this.props.user[this.props.i].website
        })
        this.props.editData(obj, this.props.i);
        

    }
    
    render(){

        
        let name_id = 'name' + this.props.user[this.props.i].id;
        let email_id = 'email' + this.props.user[this.props.i].id;
        let phone_id = 'phone' + this.props.user[this.props.i].id;
        let website_id = 'website' + this.props.user[this.props.i].id;
        let modal_id = 'myModal' + this.props.user[this.props.i].id;

        return (<div id={modal_id} class="modal fade" role="dialog" data-backdrop="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h2 class="modal-title">Form</h2>
            </div>
            <div class="modal-body">
              <form class="form-inline" onSubmit = {this.submitFunc}>
                <input type="hidden" id={this.props.user[this.props.i].id} value={this.props.user[this.props.i].id} />
              <div class="row">
                  <div class="form-group">
                    <span>Name :</span>
                    <span className="input_name"><input type="text" class="form-control" id={name_id} value={this.state.name} onChange={() => this.edit_field('name', name_id)} /></span>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="form-group">
                    <span>Email address:</span>
                    <span className="input_email"><input type="email" class="form-control" id={email_id} value={this.state.email}  onChange={() => this.edit_field('email', email_id)} /></span>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="form-group">
                    <span>Phone:</span>
                    <span className="input_phone"><input type="tel" class="form-control" id={phone_id} value={this.state.phone} onChange={() => this.edit_field('phone', phone_id)} /></span>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="form-group">
                    <span>Website :</span>
                    <span className="input_website"><input type="text" class="form-control" id={website_id} value={this.state.website} onChange={() => this.edit_field('website', website_id)} /></span>
                  </div>
                </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div> )
    }
}

const Modal = connect(mapStateToProps, mapDispatchToProps)(Modal_Show)
export default Modal