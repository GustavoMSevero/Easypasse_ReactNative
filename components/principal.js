import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { Actions } from 'react-native-router-flux';



type Props = {};
export default class Principal extends Component {

  constructor(props) {
      super(props);


  }


  render(){
    return(
      <View style={styles.container}>
        
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252F39',
  },
  
});
