import React from 'react'
import Avatar from './Avatar'
import Info from './Info'
import Features from './Features'
import { connect } from "react-redux";
import { getData } from "../actions/index";


const mapStateToProps = state => {
    return { user: state.users };
  }

function mapDispatchToProps(dispatch) {
    return {
      getData: () => dispatch(getData())
    };
  }

class Page_Show extends React.Component {
  

  

  componentDidMount() {
    this.props.getData();
  }

  
  render() {

    
    return (
      <div className="contr">{this.props.user.map( (value, index) => {

        return  (<div class="card col-xs-12 col-sm-6 col-md-3 col-lg-3">
            <Avatar i = {index} />
            
            <Info i = {index} /> 
              <Features i = {index}  />
        </div>)
        }
        )}</div>
    );
    
  }
}


const Page = connect(mapStateToProps, mapDispatchToProps)(Page_Show);
export default Page;