import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import { MemoryRouter,NativeRouter, Route, Link } from "react-router-native";

// import components
import NavBar from './components/navbar/navbar';
import PowerPoint from './entities/PowerPoint';
import Travel from './entities/Travel';
import Pikachu from './entities/Pikachu';
import Charmander from './entities/Charmander';

export default function kcam_test() {
  getRequest = () => {
    fetch('http://localhost:3000/api/users', 
    {
      mode: "no-cors",
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      // body: {
      //   "authId": "0x001"
      // },
  })
    .then(res => res.json())
    .then(data => console.log(data));
  }
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>
          Welcome to KCAM
        </Text>
        <VrButton onClick={() => this.getRequest()}><Text>Get</Text></VrButton>
      </View>
      <View style={styles.navBar}>
        <NavBar/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    display: 'flex',
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 30,
  },
  navBar: {
    // justifyContent: 'flex-end',
    // alignItems: 'stretch',
    // float: 'right',
    borderRadius: 1,
    borderColor: 'rgba(255, 255, 255, 255)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    
  }
});

AppRegistry.registerComponent('kcam_test', () => kcam_test);
AppRegistry.registerComponent('PowerPoint', () => PowerPoint);
AppRegistry.registerComponent('Travel', () => Travel);
AppRegistry.registerComponent('Pikachu', () => Pikachu);
AppRegistry.registerComponent('Charmander', () => Charmander);