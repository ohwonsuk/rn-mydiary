import React, { Component } from 'react';
import Button from '../Button';
import Icon from '../Icons';

export default class HeaderIcon extends Component {
  render() {
    return (
      <Button onPress={this.props.onPress}>
        <Icon name={this.props.iconName} size={28} color='black' />
      </Button>
    )
  }
}
