import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const Header =props=>
{
    const {branding} = props;
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
               <i className='fa fa-home'/> Home
         </Link>
        </li>
        <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
               <i className='fa fa-plus'/>Add
         </Link>
        </li>
        <li className="nav-item">
              <Link to="/about" className="nav-link">
               <i className='fa fa-question'/>About
         </Link>
        </li>
          </ul>
        </div>
      </div>
    </nav>
    );

};

//You can define default values for your props by assigning to the special defaultProps property
Header.defaultProps={
    branding: "Contact App Default"
}

Header.propTypes={
    branding:PropTypes.string.isRequired
}
export default Header;