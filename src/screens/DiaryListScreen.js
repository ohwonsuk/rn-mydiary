import React, { useCallback } from 'react';
import { View } from 'react-native';
import Header from '../components/Header/Header';
import { useNavigation } from '@react-navigation/native';

const DiaryListScreen = () => {

  const navigation = useNavigation();
  const onPressSettings = useCallback(() => {
    navigation.navigate('Setting');
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header>
        <Header.Group>
          <Header.Title title="DIARY LIST"></Header.Title>
        </Header.Group>
        <Header.Icon iconName="settings" onPress={onPressSettings} />
      </Header>
    </View>
  )
}

export default DiaryListScreen
