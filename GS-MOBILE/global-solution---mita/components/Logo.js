import { View,  Text,  StyleSheet,  Image,  TouchableHighlight } from 'react-native';

export default function Logo() {
  return (
    <View style={displayStyle.displayView}>
        <Image style={displayStyle.displayImage}
            source={require('../assets/logo.png')}
          />
    </View>
  );
};

  const displayStyle = StyleSheet.create({
  displayView: {
    width: '100%',
    height: 300,
    alignContent: 'center',
    justifyContent: 'center'
  },

  displayImage: {
    width: 170,
    height: '100%',
    resizeMode: 'contain',
    marginLeft: '25%'
  },
  });