import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

const TestCheckbox = () => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxToggle = () => {
    setChecked(!isChecked);
  };

  return (
    <View>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckBoxToggle}
      />
    </View>
  );
};

export default TestCheckbox;
