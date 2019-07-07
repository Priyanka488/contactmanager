// This is class based component
// Lifecycle methods are only available for class based components
import React,{Component} from 'react';
class Test extends Component
{
   //The componentDidMount() method runs or fires off after the component output has been rendered to the DOM.
    //Used for ajax calls and http requests
    
    componentDidMount()
    {
        console.log('Component did mount');
    }
    
    //The componentDidMount() method runs or fires off before the component output has been rendered to the DOM.
    
//    componentWillMount()
//    {
//        console.log('Component will mount');
//    }
//    
//    //Runs after the component updates and re-renders
//    componentDidUpdate()
//    {
//        console.log('Component did update');
//    }
//    
//    //Runs before the component updates and re-renders
//    componentWillUpdate()
//    {
//        console.log('Component willupdate');
//    }
//    
//    componentWillReceiveProps(nextProps,nextState)
//    {
//        console.log('Runs when a new property is added to the component');
//    }
    
    
    
    render()
    {
        return(<div>
            <h1>Test Component</h1>
            </div>
              )
            
        
    }
}

export default Test;