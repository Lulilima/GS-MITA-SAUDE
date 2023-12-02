import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import Home from './components/Home';
import firebase from 'firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userName: '',
  userEmail: '',
  userSenha: '',
  retrievedName: 'Nome recuperado',
  retrievedEmail: 'Email recuperado',
  retrievedSenha: 'Senha recuperada',
};

const config = {
  apiKey: 'AIzaSyD3xxlVYq78Zx84UvKJE9W8KYaW0ueHits',
  authDomain: 'checkpoint3-7b7ea.appspot.com',
  projectId: 'checkpoint3-7b7ea',
  databaseURL: 'https://checkpoint3-7b7ea-default-rtdb.firebaseio.com/'
};

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const [state, setState] = useState({ ...initialState });
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState();
  const auth = firebase.auth();

  const onAuthStateChanged = (user) => {
    setUser(user);
  };

  useEffect(() => {
    var subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (user) {
      retrieveData();
    }
  }, [user]);

  const criarUsuario = () => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => alert(error));
  };

  const loginUsuario = () => {
    auth
      .signInWithEmailAndPassword(email, senha)
      .then((user) => console.log(user))
      .catch((error) => console.log(error));
  };

  const deslogar = () => {
    auth.signOut();
  };

  const handleEmail = (userEmail) => {
    setEmail(userEmail);
    setState({ ...state, userEmail });
  };

  const handleSenha = (userSenha) => {
    setSenha(userSenha);
    setState({ ...state, userSenha });
  };

  const saveData = async (key, value, callback = null) => {
    try {
      await AsyncStorage.setItem(key, value, callback);
    } catch (e) {
      throw new Error('Erro ao salvar informações');
    }
  };

  const retrieveData = async (key, callback = null) => {
    try {
      const retrievedEmail = await AsyncStorage.getItem(email, callback);
      const retrievedSenha = await AsyncStorage.getItem(senha, callback);

      setState({
        ...state,
        retrievedEmail: retrievedEmail || 'Email recuperado',
        retrievedSenha: retrievedSenha || 'Senha recuperada',
      });
    } catch (e) {
      throw new Error('Erro ao recuperar informações');
    }
  };

  if (user) {
    const { userEmail, userSenha } = state;

    saveData(email, userEmail);
    saveData(senha, userSenha);

    return (
      <SafeAreaView style={styles.container}>
        <Home auth={auth}/>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Logo />
        <View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="CRM"
              onChangeText={handleEmail}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Senha"
              onChangeText={handleSenha}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.buttonView}>
            <TouchableHighlight style={styles.button} onPress={loginUsuario}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={criarUsuario}>
              <Text style={styles.recSenha}>Criar conta</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={styles.recSenha}>Recuperar senha</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  inputView: {
    margin: 20,
    gap: 7,
  },
  buttonView: {
    gap: 7,
  },
  textInput: {
    borderColor: '#A95F94',
    borderWidth: 1,
    height: 40,
    fontSize: 12,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    paddingLeft: 15,
    borderRadius: 25,
    color: 'lightgray',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: 'white',
    borderColor: '#A95F94',
    borderWidth: 1,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    color: 'slategray',
    textAlign: 'center',
  },
  recSenha: {
    fontSize: 14,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 300,
    color: 'slategray',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});