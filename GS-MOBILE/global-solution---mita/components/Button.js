import {
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default (props) => {
  return (
    <TouchableHighlight style={styles.button} onPress={() => props.onClick()}>
      <Text style={styles.buttonText}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: 'white',
    borderColor: '#A95F94',
    borderWidth: 1,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  buttonText: {
    fontSize: 14,
    fontFamily: 'Monospace, sans-serif',
    fontWeight: 600,
    color: 'slategray',
    textAlign: 'center',
  },
});
