import React, { Component } from 'react';
import { View } from 'react-native';

export default class Divider extends Component {
  render() {
    return (
      <View style={{alignSelf:'stretch', borderWidth:0.5, marginHorizontal:24, borderColor:'gray'}} />
    )
  }
}
