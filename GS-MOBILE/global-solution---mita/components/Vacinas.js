import { View, Text, StyleSheet, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import TestCheckbox from './CheckBox';
import Button from './Button';
import TextField from './TextField';

export default function Vacinas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vacinas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextField />
      </View>

      <Text style={styles.label}>Nome:</Text>

      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Idade</DataTable.Title>
          <DataTable.Title>Vacina</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Ao nascer</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>BCG<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>Hepatite B (1)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>1 mês</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>Hepatite B (2)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>Tetravalente (1)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VOP (1)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VORH (1)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>4 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>Tetravalente (2)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VOP (2)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VORH (2)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>6 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>Tetravalente (3)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VOP (3)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>VORH (3)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>9 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>Febre amarela (1)<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>12 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>SRC<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>15 meses</DataTable.Cell>
          <View style={styles.rowContainer}>
            <DataTable.Cell>VOP (3)<TestCheckbox /></DataTable.Cell>
            <DataTable.Cell>DTP<TestCheckbox /></DataTable.Cell>
          </View>
        </DataTable.Row>

      </DataTable>

      <Button label="Confirmar" />
    </View>
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

  rowContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
  }
});
