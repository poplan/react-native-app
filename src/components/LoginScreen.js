import React, {Component} from 'react';
import {StyleSheet, View, Image, 
  Text, TouchableOpacity, TextInput} from 'react-native';
import {h, w} from '../../constants'
import * as firebase from 'firebase'

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  }

  handleLogin = () => {
    const {email, password} = this.state

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => this.setState({errorMessage: error.message}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>
          {'Рады видеть тебя снова'}
        </Text>

        <View style={styles.errorMessage}>
          {this.state.errorMessage 
          && <Text style={styles.error}>{this.state.errorMessage}</Text>}
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email Address</Text>

            <TextInput 
              style={styles.input} 
              autoCapitalize='none'
              onChange={email => this.setState({email})}
              value={this.state.email}
            >
            
            </TextInput>
          </View>

          <View style={{marginTop: 32}}>
            <Text style={styles.inputTitle}>Password</Text>

            <TextInput 
              style={styles.input} 
              autoCapitalize='none'
              secureTextEntry
              onChange={password => this.setState({password})}
              value={this.state.password}
            >
            </TextInput>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={this.handleLogin}
          >
            <Text style={{color: 'white'}}>ВОЙТИ</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{alignSelf: 'center', marginTop: 32}}
            onPress={() => this.props.navigation.navigate("Register")}
            >
            <Text style={{color: '#414959', fontSize: 12}}>
              Впервые здесь? <Text style={{fontWeight: '500', color: 'blue'}}>
                Зарегистрируйтесь
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center'
  },
  img: {
    height: 50,
    width: 150,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#8A8F9E',
    fontSize: 10,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D'
  },
  button: {
    backgroundColor: 'blue',
    marginHorizontal: 30,
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32
  },

});