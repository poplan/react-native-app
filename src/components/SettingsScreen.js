import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import * as firebase from 'firebase'
import {h, w} from '../../constants'



export default class SettingsScreen extends Component {
  state = {
    email: "",
    displayName: "",
  }

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser

    this.setState({email, displayName})
  }

  signOutUser = () => {
    firebase.auth().signOut()
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={this.signOutUser}
          style={styles.button}>
          <Text style={styles.buttonText}>ВЫЙТИ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: w / 1.5,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
