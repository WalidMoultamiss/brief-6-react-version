import React from 'react';
import PropTypes from 'prop-types'
const Header = ({ title }) => {
    return (
        <header>
            <h1 style={{color:'red', background:'black'}}>{title}</h1>
            {/* <h1 style={ headingStyle }>{title}</h1> */}
        </header>
    )
}

// Header.defaultProps = {
//     title: 'Task tracker',
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
        color:'red',
        background:'green'
}

export default Header
