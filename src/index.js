/*
1. Clear App.css
2. Delete the logo file
3. Delete index.css
4. Remove the index.css dependency from index.js
5. Remove the logo dependency and all content except the main div(classname="App") from App.js
6. Smart components vs dumb components
7. Smart ones have a state and need a class, they change while dumb components do not have state.
8. With dumb components you could simply use a stateless function but any component that has a state needs to be a class.
9. 



*/





import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
