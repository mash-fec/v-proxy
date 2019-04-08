import React from "react";
import styles from './imageStyles.css';
import styled from 'styled-components'
import Image from "./image.jsx";


class ImageRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images
    };
  }

  render() {
    const RightRow = styled.div`
    display:flex;
    height:50%;
    `
  //  console.log("Images for the Row:",  this.props.images );
    return (

      <RightRow>
        {this.props.images.map(image=>
        <Image imageurl={image}></Image>
          )}
      </RightRow>

    );
  }
}

export default ImageRow;
