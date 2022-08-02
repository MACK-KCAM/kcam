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

import Pic from './Pic.js';
import { Get, Post, Put, Delete, apiRoute } from '../services/index.js';
const surfaceModule = NativeModules.surfaceModule;

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      clicked: false,
      showPicEntity: [], // needs to have same length as uri
      uri: []
    }
    this.onPicEntityClick = this.onPicEntityClick.bind(this);
    this.getAllImages = this.getAllImages.bind(this);
  }

  // get fetch url api/users with body authId -> response.global is array of all photos registered to that user
  
  getAllImages = async () => {
    // , {
    //   "authId": "0x002",
    // }
    const authId = "0x002";
    try {
      const res = await Get(apiRoute.getRoute(`users?authId=${authId}`))
      // ?authId=${authId}
      console.log("response: ", res);

      this.setState({ 
        uri: res[0].global,
        showPicEntity: new Array(res[0].global.length).fill(false)
      })
    }
    catch (err) {
      console.log(err);
    }
  }
  // get fetch url api/albums with body authId, albumId -> response.photos is array of photos registered to user + album

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

  componentDidMount() {
    this.getAllImages();
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