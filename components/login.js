import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

var img = require('../imgs/logo_easy_passe.png');

type Props = {};
export default class Login extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = { aviso : 'Erro'};

  }

  login(){
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image source={img} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.textCPF} placeholder="CPF" backgroundColor="#3598DC" textAlign="center"/>
          <TextInput style={styles.textSenha} placeholder="Senha" backgroundColor="#3598DC" textAlign="center"/>

          <View backgroundColor="#000000" style={styles.viewBtnAcesse}>
            <Button onPress={() => (false)} title="ACESSE" color="#FFFFFF"/>
            <View>
              <Text style={styles.aviso} msgAviso={this.state.aviso}></Text>
            </View>
          </View>

          <View>
            <Text style={styles.mensagem} >Esqueceu a senha?</Text>
          </View>

          <View backgroundColor="#000000" style={styles.viewBtnAcesse}>
            <Button onPress={() => Actions.cadastro()} title="CADASTRE-SE" color="#00D000"/>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252F39',
  },
  logo: {
    width:'90%',
    height: 100,
    marginTop: 100,
    marginLeft: '5%',
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
    marginLeft: '6%',
    width: '87%',
    height: 35,
    marginBottom: 20,
  },
  viewBtnAcesse: {
    marginLeft: '6%',
    width: '87%',
    height: 40,
    marginBottom: 50,
  },
  aviso: {

  },
  mensagem: {
    color:"#ffffff",
    marginLeft: '32.5%',
    marginBottom: 80,
  }
});
