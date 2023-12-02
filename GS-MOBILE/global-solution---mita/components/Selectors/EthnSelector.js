import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const EthnSelector = () => {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedGender}
        onValueChange={(itemValue) => handleGenderChange(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecionar" value="" />
        <Picker.Item label="Amarelo" value="amarelo" />
        <Picker.Item label="Branco" value="branco" />
        <Picker.Item label="Indígena" value="indigena" />
        <Picker.Item label="Negro" value="negro" />
        <Picker.Item label="Pardo" value="pardo" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  picker: {
    height: 30,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'gray'
  },
});

export default EthnSelector;
