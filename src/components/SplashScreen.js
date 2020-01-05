import React, {Component} from 'react';
import {StyleSheet, View, Image, ActivityIndicator} from 'react-native';
import {h, w} from '../../constants'
import * as firebase from 'firebase'

export default class SplashScreen extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.img}
          source={require('./img/logo.png')} 
        />
        <ActivityIndicator size='large'></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 150,
  },
});
