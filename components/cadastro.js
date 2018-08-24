import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';


type Props = {};
export default class Cadastro extends Component<Props> {

  constructor(props) {
      super(props);

  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textNome} placeholder="Nome" backgroundColor="#3598DC" />
        <TextInput style={styles.textCPF} placeholder="CPF" backgroundColor="#3598DC" />
        <TextInput style={styles.textSenha} placeholder="Senha" backgroundColor="#3598DC" />
        <View backgroundColor="#000000" style={styles.btnSalvar}>
          <Button onPress={() => (false)} title="SALVAR" color="#FFFFFF"/>
        </View>
        <View>
          <Text style={styles.avisoErro} ></Text>
        </View>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252F39',
  },
  textNome: {
    marginTop: 150,
    marginLeft: '6%',
    borderWidth: 1,
    borderRadius: 5,
    width: '87%',
    height: 35,
    marginBottom: 20,
  },
  textCPF: {
    marginLeft: '6%',
    borderWidth: 1,
    borderRadius: 5,
    width: '87%',
    height: 35,
    marginBottom: 20,
  },
  textSenha: {
    marginLeft: '6%',
    borderWidth: 1,
    borderRadius: 5,
    width: '87%',
    height: 35,
    marginBottom: 20,
  },
  btnSalvar: {
    width: '87%',
    marginLeft: '6%',
  },
  avisoErro: {
    marginTop: 20,
    textAlign: 'center',
  },

});
