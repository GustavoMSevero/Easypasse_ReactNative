import React, {Component} from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {Platform, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';


import Login from './components/login';
import Cadastro from './components/cadastro';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
          <Scene>
            <Scene key='login' component={ Login } title='Login' hideNavBar={true}/>
            <Scene key='cadastro' component={ Cadastro } title='Cadastro' />
          </Scene>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#252F39',
    color: '#ffffff',
  },
  navTitle: {
    color: 'white',
  }
});
