import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {h, w} from '../../constants'

export default class KnowledgeBaseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate('QRScanner')}
          style={styles.button}>
          <Text style={styles.buttonText}>QR СКАН</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: w / 1.5,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
});