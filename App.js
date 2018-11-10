import React, {Component} from 'react';
import {Router, Scene, Actions, Stack,Drawer} from 'react-native-router-flux';
import {Platform, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers';


import Login from './components/login';
import Cadastro from './components/cadastro';
import Principal from './components/principal';
import MenuDrawerComponent from './components/menuDrawerComponent';

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
            <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
                <Scene >
                        <Scene initial key='login' component={Login} title='Login' hideNavBar/>
                        <Scene key='cadastro' component={Cadastro} title='Cadastro'/>
                    <Drawer
                        hideNavBar
                        key="drawer"
                        /*onExit={() => {
                            console.log('Drawer closed');
                        }}
                        onEnter={() => {
                            console.log('Drawer opened');
                        }}*/
                        contentComponent={MenuDrawerComponent}
                        // drawerIcon={drawerComp}
                        drawerWidth={300}
                    >
                        <Scene key='principal' component={Principal} title='Principal'/>
                    </Drawer>


                </Scene>
            </Router>
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
