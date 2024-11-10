import React, { Component } from 'react';
import { Image as RNImage } from 'react-native';

export default class LocalImage extends Component {
  render() {
    return (
      <RNImage 
        source={this.props.localAsset} 
        style={[this.props.style, {
          width:this.props.width, 
            height:this.props.height
          }]}/>
    )
  }
}
