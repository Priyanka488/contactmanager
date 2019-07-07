import React,{Component} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Consumer} from '../../context';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Contact extends Component {
    
    constructor()
    {
        super();  
        this.state={
        showContactInfo : false
        };
        //this.onshowClick() = this.onshowClick.bind(this);
    }
    

//if you do not use arrow function, this keyword won't work for just onshowClick(){}
  onShowClick=(e)=>
    {
        this.setState({showContactInfo:!this.state.showContactInfo});
        console.log(e);
    };

//For an arrow function, we pust async before the parameters
 onDeleteClick=async(id,dispatch,e)=>
    {
     
     //Since we are not gettin anything, we need not save the rquest response in a variable
     try{
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type:'DELETE_CONTACT',payload:id}); 
     }
     catch(e)
         {
                    dispatch({type:'DELETE_CONTACT',payload:id}); 
 
         }
      
    };
  
render() {
      
      const {id,name,email,phone} =this.props.contact;
      const {showContactInfo} = this.state;
      //or even using this.props.branding also works, but destructuring makes the code cleaner.
        return(
            <Consumer>
            {value=>{
             const {dispatch}=value;
             return (
             <div className="card card-body mb-3">
            <h4>{name}{' '}
            <i 
            onClick={this.onShowClick}
            className="fa fa-sort-desc"
            style={{cursor:'pointer'}}
            ></i>
            <i className="fa fa-times" style={{cursor:'pointer',float:'right',color:'red'}}
            onClick={this.onDeleteClick.bind(this,id,dispatch)} ></i>
            
            <Link to={`contact/edit/${id}`} >
           
            <i 
            className='fa fa-pencil' 
            style={{
            cursor:'pointer',float:'right',color:'black',marginRight:'1rem'}}></i>
            
            </Link>
            </h4>

            {showContactInfo ? (
            <ul className="list-group">
            <li className='list-group-item'>Email : {email}</li>
            <li className='list-group-item'>Phone : {phone}</li>
            </ul>
            ):null}

            </div>
             )
            }}
            </Consumer>

            
        )
      
  }
    
    
}

//note default props is defined outside the class.
Contact.defaultProps={
        name:'Priya',
        phone:'9450465058'
    }

Contact.propTypes ={
    
    contact:PropTypes.object.isRequired,
}
export default Contact;
