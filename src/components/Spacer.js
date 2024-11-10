import React, { Component } from 'react';
import { View } from 'react-native';

export default class Spacer extends Component {
  render() {
    if(this.props.horizontal) {
      return (
        <View style={{marginLeft:this.props.space}}/>
      )
    }
    return (
      <View style={{marginTop:this.props.space}}/>
    )
  }
}
