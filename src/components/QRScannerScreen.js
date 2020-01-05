import React, {Component, Fragment} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  ColorPropType,
} from 'react-native';

import {h, w} from '../../constants';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRScannerScreen extends Component {
  onSuccess = obj => {
    var str = obj.data;

    // var tt = str.split('&')[0].split('t=')[1];
    // var ss = str.split('&fn')[0].split('s=')[1];
    // var fnfn = str.split('&i')[0].split('fn=')[1];
    // var ii = str.split('&fp')[0].split('i=')[1];
    // var fpfp = str.split('&n')[0].split('fp=')[1];
    // var nn = str.slice(-1);

    var info = {
      t: str.split('&')[0].split('t=')[1],
      s: str.split('&fn')[0].split('s=')[1],
      fn: str.split('&i')[0].split('fn=')[1],
      i: str.split('&fp')[0].split('i=')[1],
      fp: str.split('&n')[0].split('fp=')[1],
      n: str.slice(-1),
    }

    console.log(info)

    // fetch('localhost', {
    //   method: 'POST',
    //   credentials: 'same-origin',
    //   mode: 'same-origin',
    //   headers: {
    //     'Accept':       'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(info)
    // })
  }

  render() {
    return <QRCodeScanner style={styles.camera} onRead={this.onSuccess} />;
  }
}


const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

AppRegistry.registerComponent('default', () => QRScanner);