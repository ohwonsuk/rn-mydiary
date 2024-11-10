import React, { Component } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Icon extends Component {
  render() {
    return (
      <Ionicons 
        name={this.props.name} 
        size={this.props.size} 
        color={this.props.color} 
        />
    )
  }
}
