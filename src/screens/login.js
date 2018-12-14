import React, {Component} from 'react';
import {Platform, ScrollView,TouchableOpacity,StyleSheet, Text, View, Image, TextInput, Button, AsyncStorage} from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderLogoInfoComponent from '../components/headerLogoinfoComponent';

var img = require('../assets/imgs/logo-menor.png');

type Props = {};
export default class Login extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
        msg: null ,
        cpf: null,
        senha: null,
        dialogVisible:false
    };

    this.logar  = this.logar.bind(this);

  }

  logar(){

    var urlLoginUsuario = 'http://easypasse.com.br/gestao/wsLogin.php';
      fetch(urlLoginUsuario, {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              cpf: this.state.cpf, senha: this.state.senha,
              method: 'app-get-login', "plataforma": 'ios'
          })
      })
          .then((response) => {
                  return response.json();
          })
          .then((responseJson) => {
              const body = responseJson;
              //alert(JSON.stringify(body.registro.usuario));
              var msg = body.msg;
              //console.log(body)
              //console.log(body.error)
              //console.log(body.msg)
              if (body.error === 'Autenticacao') {
                  //console.log(body.error)
                  //this.setState({msg: msg});
                  alert(msg);
              } else if (body.error === 'Sucesso') {
                  try {
                      AsyncStorage.setItem('usuario', JSON.stringify(body.registro.usuario));
                  } catch (error) {
                      // Error saving data
                      console.log('Erro: ' + error);
                      alert(error);
                  }

                  Actions.principal();
              }

          })
          .catch((error) => {
              console.error(error);
              //alert(JSON.stringify(error))
          });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View >
          <Image source={img} style={styles.logo} />
        </View>
        <View style={{paddingTop:20,alignItems:'center',flex:1,flexDirection: 'column'}}>
          <TextInput style={styles.textCPF} 
            placeholder="CPF"
            onChangeText={texto => this.state.cpf = texto }
            textAlign="center"/>

          <TextInput style={styles.textSenha} 
            placeholder="Senha" 
            onChangeText={texto => this.state.senha = texto }
            textAlign="center"
            secureTextEntry={true}/>

            <TouchableOpacity style={styles.viewBtnAcesse} onPress={() => this.logar()}  >
                <View style={{alignItems: 'center'}}>
                    <Text style={{color:'white',marginTop:7}}>ACESSE</Text>
                </View>
            </TouchableOpacity>

          <TouchableOpacity style={{}}>
            <Text style={styles.mensagem} >Esqueceu a senha?</Text>
          </TouchableOpacity>

            <TouchableOpacity style={styles.viewBtnCadastrese} onPress={() => Actions.cadastro()}  >
                <View style={{alignItems: 'center'}}>
                    <Text style={{color:'green',marginTop:7}}>CADASTRE-SE</Text>
                </View>
            </TouchableOpacity>

        </View>
      </ScrollView>
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
    height: 170,
    marginTop: 120,
  },
  textCPF: {
    borderRadius: 30,
    width: '87%',
    height: 35,
    marginBottom: 20,
      backgroundColor:"#3598DC"
  },
  textSenha: {
    borderRadius: 30,
    width: '87%',
    height: 35,
    marginBottom: 20,
      backgroundColor:"#3598DC"
  },
  viewBtnAcesse: {
      borderRadius: 30,
      width: '87%',
      height: 35,
      marginBottom: 20,
      borderColor:'#3598DC',
      borderWidth:2
  },
    viewBtnCadastrese: {
        borderRadius: 30,
        width: '87%',
        height: 35,
        borderColor:'#3598DC',
        borderWidth:2,
        marginTop:80
    },
  avisoErro: {
    marginTop: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  mensagem: {
    color:"#ffffff",
  }
});
