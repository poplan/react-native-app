import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/components/LoginScreen'
import MainScreen from './src/components/MainScreen'
import SettingsScreen from './src/components/SettingsScreen'
import KnowledgeBaseScreen from './src/components/KnowledgeBaseScreen'
import QRScannerScreen from './src/components/QRScannerScreen'
import RegisterScreen from './src/components/RegisterScreen'
import SplashScreen from './src/components/SplashScreen'
import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAO_QX1397hCwsfSQWCBnW67tPqYF5bMt0",
  authDomain: "likeitproject-5c16f.firebaseapp.com",
  databaseURL: "https://likeitproject-5c16f.firebaseio.com",
  projectId: "likeitproject-5c16f",
  storageBucket: "likeitproject-5c16f.appspot.com",
  messagingSenderId: "813311815355",
  appId: "1:813311815355:web:7e10b78bf974fc9372039e"
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator(
  {
    Main: {screen: MainScreen},
    Settings: {screen: SettingsScreen},
    KnowledgeBase: {screen: KnowledgeBaseScreen},
    QRScanner: {screen: QRScannerScreen}, 
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  }
)

const AuthStack = createStackNavigator(
  {
    Login: {screen: LoginScreen},
    Register: {screen: RegisterScreen}, 
  },
  {
    defaultNavigationOptions: {
      headerShown: false
    },
  }
)

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: SplashScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading'
    }
  )
)
