import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component {

    state = {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = (event) => {
        event.preventDefault();
        if ( this.state.text === '' ) {
            this.props.setAlert('Please enter something','light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' }); // clearing search form
        }
        
    };

    onChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }); 
        /* 
        - mame tu key:value  pair, a hranate zatvorky nam v es6 umoznuju takto pridat key dynamicky. Ne-dynamicky by nebol v hranatych zatvorkach 
        - pozriet kapitolu ,,computed property names,, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
        
        
        keby sme mali viac inputov, aby sme mali 1 univerzalnu onChange metodu, tak maly trik je dat to univerzalne 
        prvu hodnotu do setState  a sice [event.target.name], podla name rozozna co za input to je, ale musi byt robnake ako 
        prislusna hodnota v state

        name="text" v inpute musi byt text aj meno hodnoty v state objekte musi byt text, alebo
        name="email" a meno hodnoty v state objekte musi byt email, hej napriklad, email: 'kokot.kokot@gmail.com'

        este vo value inputu musi byt value={this.state.text}, alebo value={this.state.email} 
        */
    };

    render() {

        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        value={this.state.text} 
                        name="text" 
                        placeholder="Search Users..."
                        onChange={this.onChange}
                        />
                        
                    <input 
                        type="submit" 
                        value="Search" 
                        className="btn btn-dark btn-block"
                        />
                </form>
                { showClear && ( // inline IF trick for checking if expression is true. If showClear is tru, render button
                    <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                )}
            </div>
        )
    };
};

export default Search
