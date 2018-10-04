import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';

var img = require('../imgs/logo_easy_passe.png');

type Props = {};
export default class Login extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = { msg: null , cpf: null, senha: null};

    this.logar  = this.logar.bind(this);

  }

  logar(){
    //console.log(this.state.cpf+' '+this.state.senha)
    var urlLoginUsuario = 'http://easypasse.com.br/gestao/wsLogin.php';
    fetch(urlLoginUsuario,{  method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        cpf: this.state.cpf, senha: this.state.senha,
        method: 'app-get-login', "plataforma": 'ios'})})
      .then((response) => response.json())
      .then((responseJson) => {
          const body = responseJson
          var msg = body.msg;
          //console.log(body)
          //console.log(body.error)
          //console.log(body.msg)
          if(body.error == 'Autenticacao'){
            //console.log(body.error)
            this.setState({msg: msg});
          } else {
            //console.log('Beleza!')
            //console.log(body.registro.usuario)
            _storeData = async () => {
              try {
                await AsyncStorage.setItem('usuario', body.registro.usuario);
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

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image source={img} style={styles.logo} />
        </View>
        <View>
          <TextInput style={styles.textCPF} 
            placeholder="CPF" 
            onChangeText={texto => this.state.cpf = texto }
            backgroundColor="#3598DC" 
            textAlign="center"/>

          <TextInput style={styles.textSenha} 
            placeholder="Senha" 
            onChangeText={texto => this.state.senha = texto }
            backgroundColor="#3598DC" 
            textAlign="center" 
            secureTextEntry={true}/>

          <View backgroundColor="#000000" style={styles.viewBtnAcesse}>
            <Button onPress={() => this.logar()} title="ACESSE" color="#FFFFFF"/>
            <View>
              
              <Text style={styles.avisoErro}>{this.state.msg}</Text>
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
  avisoErro: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  mensagem: {
    color:"#ffffff",
    marginLeft: '32.5%',
    marginBottom: 80,
  }
});
