import React, { Component } from 'react';
import { View } from 'react-native';
import Badge from './Badge';
import Icon from './Icons';

export default class TabIcon extends Component {
  render() {
    if (this.props.visibleBadge){
      return (
        <View>
          <Badge fontSize={10}>
            <Icon 
              name={this.props.iconName} 
              size={20} 
              color={'black'} 
              />
          </Badge>
        </View>
      )
    }
    return (
      <View>
        <Icon 
          name={this.props.iconName} 
          size={20} 
          color={'black'} 
          />
    </View>
    )
  }
}
