import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const pics = []
    for(let i = 0; i < 10; i++){
    pics.push(<View style={styles.greetingBox}key={`pics${i}`}/>)
    }
    return (
      <View style={styles.panel}>
        {/* <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Travel
          </Text>
        </View> */}
        {pics}
      </View>
    );
  }
};

export const styles = StyleSheet.create({
  panel: {
    display:'flex',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotateX: 0 },
      { rotateY: -90 },
      { rotateZ: 0 },
      { translateX: -0 },
      { translateY: 150 },
      { translateZ: -200 },
    ],
    flexWrap:'wrap',
    maxWidth:500
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
  }
});

AppRegistry.registerComponent('Travel', () => Travel);