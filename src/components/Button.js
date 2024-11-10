import React, { Component } from 'react';
import { Pressable } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <Pressable 
        onPress={this.props.onPress} 
        hitSlop={this.props.hitSlop ?? {left:0, right:0, top:0, bottom:0}}
        >
          {this.props.children}
      </Pressable>
    )
  }
}
