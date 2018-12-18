import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView, Text, View, Image, TextInput, Button, AsyncStorage} from 'react-native';

let telaInicialIcone = require('../assets/imgs/drawer/icone_tela_inicial.png');
let minhaContaIcone = require('../assets/imgs/drawer/icone_minha_conta.png');
let configuracoesIcone = require('../assets/imgs/drawer/icone_configuracoes.png');
let localizarOnibusIcone = require('../assets/imgs/drawer/icone_localizar_onibus.png');
let indicarIcone = require('../assets/imgs/drawer/icone_Indicar.png');
let creditosIcone = require('../assets/imgs/drawer/icone_creditos.png');
let historicoIcone = require('../assets/imgs/drawer/icone_historico.png');

export default class MenuDrawerComponent extends  Component{

    constructor(props){
        super(props);

    }

    render(){
        return <ScrollView style={{flex:1,backgroundColor:'#141c22',paddingTop: 20}}>

            <View style={styles.containerIcone} >
                <Image source={telaInicialIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>Tela inicial</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={minhaContaIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>Minha conta</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={configuracoesIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>CONFIGURAÇÕES</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={localizarOnibusIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>LOCALIZAR ÔNIBUS</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={indicarIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>INDICAR</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={creditosIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>CRÉDITOS</Text>
            </View>

            <View style={styles.containerIcone} >
                <Image source={historicoIcone} style={styles.imageIcone} />
                <Text style={styles.textIcone}>HISTÓRICO</Text>
            </View>
        </ScrollView>
    }
}



const styles = StyleSheet.create({
    containerIcone:{
        alignItems: 'center',
        flexDirection: 'column',
        marginTop:10
    },
    imageIcone: {
        width:40,
        height:40,

    },
    textIcone:{
        paddingTop:10,
        color:'white'
    }
});