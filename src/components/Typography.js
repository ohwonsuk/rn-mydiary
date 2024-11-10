import React, { Component } from 'react';
import { Text as RNText } from 'react-native';
import propTypes from 'prop-types';

export default class Typography extends Component {
  render() {
    return (
      <RNText style=
      {{
        color:this.props.color, 
        fontSize: this.props.fontSize
        }}>
        {this.props.children}
      </RNText>
    )
  }
}

Typography.propTypes = {
  color: propTypes.string,
  fontSize: propTypes.number,
  children: propTypes.oneOfType([propTypes.string, propTypes.element]).isRequired
}