import React, {Component} from 'react';
import {Router, Scene, Actions, Stack,Drawer} from 'react-native-router-flux';
import {Platform, StyleSheet,View,Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import HeaderLogoInfoComponent from './src/components/headerLogoinfoComponent';

import reducers from './reducers';


import Login from './src/screens/login';
import Cadastro from './src/screens/cadastro';
import Principal from './src/screens/principal';
import MenuDrawerComponent from './src/screens/menuDrawerComponent';

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
                        <Scene key='principal' component={Principal} headerTintColor='white' renderTitle={() => { return <HeaderLogoInfoComponent name="wallace" id={36}/>; }} />
                    </Drawer>


                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#394868',
        color: '#ffffff',
    },
    navTitle: {
        color: 'white',
    }
});
