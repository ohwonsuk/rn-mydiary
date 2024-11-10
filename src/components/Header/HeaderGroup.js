import React, { Component } from 'react';
import { View } from 'react-native';

export default class HeaderGroup extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', alignItems:'center'}}>
        {this.props.children}
      </View>
    )
  }
}
