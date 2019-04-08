import React from "react";
import styles from './imageStyles.css';
import styled from 'styled-components'
class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const RightChild = styled.div`
    background-image: url('${this.props.imageurl}');

    height:100%;
    width:50%;
    border: white solid 1px;
    background-size: 100% 100%;

    `
    return (

       <RightChild></RightChild>

    );
  }
}

export default Image;
