import React,{Component} from 'react';
import axios from 'axios';
//1. first make a new context 
const Context = React.createContext();
const reducer =(state,action)=>
{
    //payload is just some data that has been sent along with the action
    switch(action.type)
    {
        case 'DELETE_CONTACT':return {
            ...state,
            contacts :state.contacts.filter(contact=>contact.id!== action.payload)
                };
            
            case 'ADD_CONTACT':return {
            ...state,
            contacts :[action.payload,...state.contacts]
                };
            
            case 'UPDATE_CONTACT':return {
            ...state,
            contacts :state.contacts.map(contact=>
                {
                return contact.id===action.payload.id?(contact=action.payload):contact;
                
            })
                };
        default:return state; 
}
};

//2. provider component is where your entire data lives.
export class Provider extends Component{
     state=
        {
        
    contacts:[],
         
         dispatch :action=>
         {
         this.setState(state=>reducer(state,action))
     }
    };

//Lifecycle methods
async componentDidMount()
{
    /*axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>this.setState({contacts:res.data}));*/
    
    //USing async await
    
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({contacts:res.data});
}
render()
{
    return(
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
        )
}
}

export const Consumer = Context.Consumer;