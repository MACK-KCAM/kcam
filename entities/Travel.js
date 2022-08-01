import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  TouchableOpacity,
  NativeModules
} from 'react-360';

import Pic from './Pic.js'
const surfaceModule = NativeModules.surfaceModule;

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      clicked: false,
      showPicEntity: [false, false, false, false, false],
      uri: ['static_assets/greece/beach.jpeg', 'static_assets/greece/santorini.jpeg', 'static_assets/ch_cambodia.avif', 'static_assets/a.avif','static_assets/unsplashItaly.jpg'],
    }
    this.onPicEntityClick = this.onPicEntityClick.bind(this);
  }

  onPicEntityClick(i){
    this.setState(prevState => ({
      showPicEntity: [...prevState.showPicEntity.slice(0, i),
        !prevState.showPicEntity[i],
        ...prevState.showPicEntity.slice(i+1, prevState.showPicEntity.length)],
        count: prevState.count++,
        clicked: !prevState.clicked,
    }));
    if (this.state.showPicEntity.includes(true)) surfaceModule.dePic();
    if (!this.state.showPicEntity[i]) {
      surfaceModule.pic(this.state.uri[i])
    }
    else surfaceModule.dePic()
    // else if (!this.state.clicked && this.state.count > 1) surfaceModule.dePic()
  }

  render () {
    const pics = []
    // i < images.length
    for(let i = 0; i < this.state.uri.length; i++){
      pics.push(
      // <VrButton
      //   style={styles.greetingBox}
      //   key={`pics${i}`}
      //   onClick={() => console.log('hello')}
      // >
      // <TouchableOpacity>
        <View key={`pics${i}`} style={styles.greetingBox}>
          <VrButton onClick={
            () => this.onPicEntityClick(i)
          }>
            <Image style = {{width: 75, height:75, borderRadius:10}}
              source={{ uri: this.state.uri[i] }}
            ></Image>
            {/* <Pic uri={images[i].uri}/> */}
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