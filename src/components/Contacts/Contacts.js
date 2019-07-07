 //if you are using constructor only for initialising state, you need not a constructor, you can simply write state ={} inside a class directly without a constructor

import React,{Component} from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';

class Contacts extends Component{
    
   
  
    
    render()
    {
        return(
            <Consumer>
            {value=>
            {
            const {contacts} = value;
            return(
            <React.Fragment>
            <h1 className="display-4 mb-2"><span className="text-danger">Contact </span> List</h1>
            <h3>{this.props.heading}</h3>
            {contacts.map(contact=>(<Contact key={contact.id} contact={contact}
            />
            )
            )
            }
            </React.Fragment>
            )
            }}
            </Consumer>
        
        );
        
}}

export default Contacts;