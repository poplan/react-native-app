import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, 
  Alert, Text} from 'react-native';
import {h, w} from '../../constants'
import RNExitApp from 'react-native-exit-app'
import * as firebase from 'firebase'


export default class MainScreen extends Component {
  state = {
    email: "",
    displayName: "",
  }

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Привет, {this.state.displayName}</Text>
        <Image 
         style={styles.avatar}
         source={require('./img/avatar.jpg')}
        />
        <TouchableOpacity 
          onPress={() => Alert.alert('Soon')}
          style={styles.button}>
          <Text style={styles.buttonText}>РЕГИСТРАЦИЯ ПРОДАЖ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => Alert.alert('Soon')}
          style={styles.button}>
          <Text style={styles.buttonText}>РАСПЕЧАТКА</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => Alert.alert('Soon')}
          style={styles.button}>
          <Text style={styles.buttonText}>МОИ ЧЕКИ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('KnowledgeBase')}
          style={styles.button}>
          <Text style={styles.buttonText}>БАЗА ЗНАНИЙ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => Alert.alert('Soon')}
          style={styles.button}>
          <Text style={styles.buttonText}>РЕЙТИНГ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('Settings')}
          style={styles.button}>
          <Text style={styles.buttonText}>НАСТРОЙКИ</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => RNExitApp.exitApp()}
          style={styles.button}>
          <Text style={styles.buttonText}>ВЫХОД</Text>
        </TouchableOpacity>
        <Image 
          style={styles.img}
          source={require('./img/logo.png')} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    height: 50,
    width: 150,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: w / 1.5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
});