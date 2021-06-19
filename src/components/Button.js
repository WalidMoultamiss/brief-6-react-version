import React from 'react'
import PropTypes from 'prop-types'


const Button = ({color,text,onClick}) => {

    // const onClick = (e) => {
    //     //  console.log(e.pageX);

    // }


    return (
    <button onClick={onClick} className="btn" style={{background:color}} >{text}</button>
    )
}

Button.defaultProps = {
    color: 'pink',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    // onClick: PropTypes.func.isRequired
    
}

export default Button
