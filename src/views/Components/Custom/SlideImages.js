import React from "react";
const SlideImages = (props) => {
    // console.log(props)
    const { image, alt } = props;
    return (<img src={image} alt={alt} className="slick-image" />)
}

export default SlideImages