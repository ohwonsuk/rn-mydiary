import React, { Component } from 'react';
import { Image as RNImage } from 'react-native';

export default class RemoteImage extends Component {
  render() {
    return (
      <RNImage 
        source={{uri: this.props.url}} 
        style={[this.props.style, {
          width:this.props.width, 
            height:this.props.height
          }]}/>
    )
  }
}
