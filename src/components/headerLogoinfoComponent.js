import React,{Component} from "react";
import {View, Image, Text, AsyncStorage} from 'react-native';

var logoHeader = require('../assets/imgs/logo-header.png');

export default class HeaderLogoInfoComponent extends Component {


    usuario=null;
    constructor(props) {
        super(props);
        //this.usuario = JSON.parse(this._retrieveData());
        this.state = {
          usuario:null
        };
        this._retrieveData();
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('usuario');
            if (value !== null) {
                console.log(value);
                this.usuario = value;
                this.setState({usuario:JSON.parse(value)});
            }

        } catch (error) {
            // Error retrieving data
        }
    };

    render(){
        return <View style={{flexDirection: 'row',flex: 1}}>
            <Image source={logoHeader} style={{height:40,width:100}} />
            <View style={{marginLeft:20}}>
                <Text style={{color:'white'}}>{this.state.usuario && this.state.usuario.nome}</Text>
                <Text style={{color:'white'}}>{'ID:'+(this.state.usuario && this.state.usuario.idUsuario)}</Text>
            </View>
        </View>
    }


}