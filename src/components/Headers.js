import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import Tasks from './Tasks'
const Header = ({ title }) => {

    const onClick = ()=>{
        console.log('clickini');
    }

    return (
        <header className="header">
            <h1 style={{color:'black'}}>{title}</h1>
            {/* imbedding */}
            
            <Button color='green' text='Add' onClick={onClick} />
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

// const headingStyle = {
//         color:'red',
//         background:'green'
// }

export default Header
