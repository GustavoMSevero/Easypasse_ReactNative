import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


type Props = {};
export default class Cadastro extends Component {

  constructor(props) {
      super(props);

      this.state = {
          nome: null,
          cpf: null,
          senha: null,
          msg: '',
      };

      this.salvar  = this.salvar.bind(this);

  }

  salvar() {
    //console.log(this.state.nome+' '+this.state.cpf+' '+this.state.senha)
    var urlCadastroUsuario = 'http://easypasse.com.br/gestao/wsCadastrar.php';

  fetch(urlCadastroUsuario,{  method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        nome: this.state.nome, cpf: this.state.cpf, senha: this.state.senha,
        method: 'app-set-usuario', "plataforma": 'ios'})})
    .then((response) => response.json())
    .then((responseJson) => {
        const body = responseJson
        var msg = body.msg;
        // console.log(body.error)
        // console.log(body.msg)
        if(body.error == 'Validar Informacao'){
          //console.log(body.error)
          this.setState({msg: msg});
        } else {
          //console.log(body.usuario[0])
          //console.log('Beleza!')
          let _storeData = async () => {
            try {
              await AsyncStorage.setItem('usuario', body.usuario[0]);
            } catch (error) {
              // Error saving data
              console.log('Erro: '+erro)
            }
          }
          Actions.push('principal');
        }
        
      })
      .catch((error) => {
      console.error(error);
      });
  }


  render(){
    return(
      <View style={styles.container}>
        <TextInput style={styles.textNome}
          onChangeText={texto => this.state.nome = texto }
          placeholder="Nome"

        />

        <TextInput style={styles.textCPF}
          onChangeText={texto => this.state.cpf = texto }
          placeholder="CPF"

        />

        <TextInput style={styles.textSenha}
          secureTextEntry={true}
          onChangeText={texto => this.state.senha = texto }
          placeholder="Senha"

        />

        <View  style={styles.btnSalvar}>
          <Button onPress={() => this.salvar()} title="SALVAR" color="#FFFFFF"/>
        </View>

        <View>
          <Text style={styles.avisoErro}>{this.state.msg}</Text>
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
    backgroundColor:"#3598DC"
  },
  textCPF: {
    marginLeft: '6%',
    borderWidth: 1,
    borderRadius: 5,
    width: '87%',
    height: 35,
    marginBottom: 20,
    backgroundColor:"#3598DC"
  },
  textSenha: {
    marginLeft: '6%',
    borderWidth: 1,
    borderRadius: 5,
    width: '87%',
    height: 35,
    marginBottom: 20,
    backgroundColor:"#3598DC"
  },
  btnSalvar: {
    width: '87%',
    marginLeft: '6%',
    backgroundColor:"#000000"
  },
  avisoErro: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },

});
