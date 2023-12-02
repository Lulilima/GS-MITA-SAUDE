import { View, Text, StyleSheet, TextInput } from 'react-native';
import { DataTable } from 'react-native-paper';
import Button from './Button';
import TextField from './TextField';

export default function Consultas() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CPF:</Text>
        <TextField />
      </View>

      <Text style={styles.label}>Nome:</Text>

      <DataTable>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title>Dados da última consulta</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>Peso</DataTable.Cell>
          <DataTable.Cell><TextField/> kg</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Altura</DataTable.Cell>
          <DataTable.Cell><TextField/> cm</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Enfermidades</DataTable.Cell>
          <DataTable.Cell><TextField/></DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Outros dados</DataTable.Cell>
          <DataTable.Cell><TextField/></DataTable.Cell>
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
