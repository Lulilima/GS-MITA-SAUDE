import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';
import TextField from './TextField';
import DateInput from './DateInput';
import TestCheckbox from './CheckBox';
import GenderSelector from './Selectors/GenderSelector';
import EthnSelector from './Selectors/EthnSelector';
import Button from './Button';

export default function Cadastro() {

  return (
    <>   

    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextField />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextField />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso:</Text>
        <TextInput
          style={{
            borderColor: '#A3A3A3',
            borderBottomWidth: 1,
            height: 25,
            fontSize: 12,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            paddingLeft: 10,
            width: '20%',
            marginBottom: 10,
            marginRight: 5,
          }}
        />
        <Text style={styles.label}>kg</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura:</Text>
        <TextInput
          style={{
            borderColor: '#A3A3A3',
            borderBottomWidth: 1,
            height: 25,
            fontSize: 12,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            paddingLeft: 10,
            width: '20%',
            marginBottom: 10,
            marginRight: 5,
          }}
        />
        <Text style={styles.label}>cm</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nasc.:</Text>
        <DateInput/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Teste do pezinho:</Text>
        <TestCheckbox/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Sexo:</Text>
        <GenderSelector/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Etnia:</Text>
        <EthnSelector/>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Endereço:</Text>
        <TextField />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Comunidade:</Text>
        <TextField />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Condições preexistentes:</Text>
        <TextField />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CRM responsável:</Text>
        <TextField />
      </View>

      <Button label="Confirmar"/>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#A95F94',
    fontFamily: 'Monospace, sans-serif',
    fontWeight: 600,
    margin: 50,
    fontSize: 50,
  },

  label: {
    color: '#A95F94',
    fontFamily: 'Monospace, sans-serif',
    fontWeight: 600,
    marginRight: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
});
