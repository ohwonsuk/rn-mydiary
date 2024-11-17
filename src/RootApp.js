import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStackNavigation from './navigations/RootStackNavigation';

const RootApp = () => {
  return (
    <NavigationContainer>
      <RootStackNavigation />
    </NavigationContainer>
  )
}

export default RootApp;
