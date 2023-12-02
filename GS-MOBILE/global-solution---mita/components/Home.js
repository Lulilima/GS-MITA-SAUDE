import {
  View,
  StyleSheet
} from 'react-native';
import Logo from './Logo';
import Button from './Button';
import Cadastro from './Cadastro';
import Vacinas from './Vacinas';
import Consultas from './Consultas';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD3xxlVYq78Zx84UvKJE9W8KYaW0ueHits',
  authDomain: 'checkpoint3-7b7ea.appspot.com',
  projectId: 'checkpoint3-7b7ea',
  databaseURL: 'https://checkpoint3-7b7ea-default-rtdb.firebaseio.com/'
};

const Stack = createStackNavigator();

export default function App({auth}) {
   return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Vacinas" component={Vacinas}/>
        <Stack.Screen name="Consultas" component={Consultas}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
   )
}

function Home({navigation}) {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  const deslogar = () => {
    auth.signOut();
  };

  return (
    <View style={styles.displayView}>
      <Logo />
      <Button label="Novo cadastro" onClick={() => navigation.navigate("Cadastro")} />
      <Button label="Vacinas" onClick={() => navigation.navigate("Vacinas")}/>
      <Button label="Consultas" onClick={() => navigation.navigate("Consultas")}/>
      <Button label="Deslogar" onClick={() => deslogar()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  displayView: {
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
