import React from 'react'

const Strapi = ({image, title}) => {

    const customStyles = {
        width: "200px"
    }

    return (
        <div className="single-inner-container">
            <img style={customStyles} src={image} alt=""/>
            <h1>{title}</h1>
        </div>
    )
}

export default Strapi;