import {
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default ({props}) => {
  return (
    <TextInput style={styles.textInput} underlineColorAndroid="transparent"/>
  );
};
const styles = StyleSheet.create({
textInput: {
    borderColor: '#A3A3A3',
    borderBottomWidth: 1,
    height: 25,
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    paddingLeft: 10,
    width: '100%',
    marginBottom: 15
  }
});