import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image source={require('./imgs/logo_easy_passe.png')} />
        </View>
        <View>

          <TextInput style={styles.textCPF} placeholder="CPF" backgroundColor="#3598DC" textAlign="center"/>
          <TextInput style={styles.textSenha} placeholder="Senha" backgroundColor="#3598DC" textAlign="center"/>
          <View backgroundColor="#000000" style={styles.viewBtnAcesse}>
            <Button onPress={() => (false)} title="ACESSE" color="#FFFFFF"/>
          </View>
          <View>
            <Text color="#ffffff">Esqueceu a senha?</Text>
          </View>
          <View backgroundColor="#000000" style={styles.viewBtnAcesse}>
            <Button onPress={() => (false)} title="CADASTRE-SE" color="#00D000"/>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#252F39',
  },
  textCPF: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 25,
    width: 325,
    height: 35,
    marginBottom: 20,
  },
  textSenha: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 25,
    width: 325,
    height: 35,
    marginBottom: 20,
  },
  viewBtnAcesse: {
    marginLeft: 25,
    width: 325,
    marginBottom: 20,
  }
});
