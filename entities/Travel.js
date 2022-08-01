import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  TouchableOpacity,
} from 'react-360';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      clicked:false
    }
  }

  render () {
    const pics = []
    for(let i = 0; i < 12; i++){
    pics.push(
      // <VrButton
      //   style={styles.greetingBox}
      //   key={`pics${i}`}
      //   onClick={() => console.log('hello')}
      // >
      // <TouchableOpacity>
        <View key={`pics${i}`} style={styles.greetingBox}>
          <VrButton onClick={console.log("image clicked")}>
            <Image style = {{width: 75, height:75, borderRadius:10}}
              source={{ uri: 'static_assets/greece/santorini.jpeg' }}
            ></Image>
          </VrButton>
        </View>
        

    );
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
    display: 'flex',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
    flexWrap: 'wrap',
    maxWidth: 400,
  },
  greetingBox: {
    padding: 1,
    backgroundColor: '#2B2B68',
    borderColor: '#2B2B68',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Travel', () => Travel);