import { StyleSheet, Text, View } from 'react-native';
import Typography from './src/components/Typography';
import LocalImage from './src/components/LocalImage';
import RemoteImage from './src/components/RemoteImage';
import Icon from './src/components/Icons';
import Badge from './src/components/Badge';
import Button from './src/components/Button';
import Divider from './src/components/Divider';
import Spacer from './src/components/Spacer';
import TabIcon from './src/components/TabIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={20}>
        이것은 텍스트입니다.
      </Typography>
      <Spacer space={20} />
      <Divider />
      <LocalImage 
        localAsset={require('./assets/favicon.png')} 
        width={50} 
        height={50} 
        />
      <Spacer space={20} />
      <Divider />
      <Spacer space={20} />
      <RemoteImage 
        url={'https://images.pexels.com/photos/29139391/pexels-photo-29139391/free-photo-of-palacio-de-bellas-artes.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'}
        width={100}
        height={200} 
      />
      <Spacer space={20} />
      <Divider />
      <Icon name='home' size={40} color='red' />
      <Divider />
      <View style={{flexDirection: 'row'}}>
        <Badge fontSize={10}>
          <Typography fontSize={20}>
            BADGE
          </Typography>
        </Badge>
        <Badge fontSize={10} >
          <Icon name='home' size={50} color='black' />
        </Badge>
      </View>
      <Divider />
      <View style={{flexDirection:'row', marginTop:32}}>
        <Button 
          onPress={() => {
            console.log('button pressed..')
            }}>
          <Typography>TEXT BUTTON</Typography>
        </Button>
        <Button
          onPress={() => {
            console.log('button pressed..')
            }}
        >
          <Icon name='home' size={50} color='green' />
        </Button>
      </View>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <TabIcon iconName='home' visibleBadge/>
        <TabIcon iconName='home'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
