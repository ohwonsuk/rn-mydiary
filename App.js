import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/Header/Header';
import TabIcon from './src/components/TabIcon';
import Spacer from './src/components/Spacer';
import Typography from './src/components/Typography';
import LocalImage from './src/components/LocalImage';
import RemoteImage from './src/components/RemoteImage';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        {/* <HeaderWithoutCompound title='HEADER' /> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back'></Header.Icon>
            <Header.Title title='HEADER'></Header.Title>
          </Header.Group>
          <Header.Icon iconName='close'></Header.Icon>
        </Header>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TabIcon iconName='home' visibleBadge />
          <Spacer space={20} />
          <TabIcon iconName='home' />
          <Spacer space={20} />
          <Typography color='red' fontSize={20}>
            TEXT
          </Typography>
          <View style={{ flexDirection: 'row' }}>
            <LocalImage
              localAsset={require('./assets/favicon.png')}
              width={100}
              height={100}
            />
            <Spacer horizontal={true} space={40} />
            <LocalImage
              localAsset={require('./assets/favicon.png')}
              width={100}
              height={100}
            />
          </View>
          <RemoteImage
            url="https://images.pexels.com/photos/3335607/pexels-photo-3335607.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            width={200}
            height={200}
          />
        </View>
      </View>
    </SafeAreaProvider >
  );
}
