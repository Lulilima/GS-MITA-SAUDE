import React, { useState } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const GenderSelector = () => {
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
        <Picker.Item label="Masculino" value="masculino" />
        <Picker.Item label="Feminino" value="feminino" />
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

export default GenderSelector;
