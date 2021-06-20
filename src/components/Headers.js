import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title,onAdd,showAdd }) => {

    // const onClick = ()=>{
    //     console.log('clickini');
    // }
    // const showAddTask = ()=>{
    //     console.log('show');
    // }


    return (
        <header className="header">
            <h1 style={{color:'black'}}>{title}</h1>
            {/* imbedding */}
            
            <Button  color={showAdd ? 'red' : 'green'}  text={showAdd ? 'close' : 'add'} onClick={onAdd} />
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
