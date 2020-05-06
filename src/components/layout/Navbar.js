import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const { title, icon } = props;
    
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={ icon }></i> { title }
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link> {/* We need to use Link instead of ,,<a>,, tag if we want to preserve state from previous visit */}
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>  
    );
    
};

Navbar.defaultProps = {
    title: 'Trololo app',
    icon: 'fab fa-facebook'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default Navbar;
