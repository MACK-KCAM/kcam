import React, { useState, useEffect } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  NativeModules,
  TouchableOpacity,
} from 'react-360';

import { Get, Post, Put, Delete, apiRoute } from '../services/index.js';

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: false,
      showAlbumEntity: [false, false, false, false, false],
      albumPhotos: []
    };
    this.onAlbumClick = this.onAlbumClick.bind(this);
  }

  getAlbumImages = async () => {
    // , {
    //   "authId": "0x002",
    // }
    const authId = "0x002";
    const albumId = 2;
    try {
      const res = await Get(apiRoute.getRoute(`album?authId=${authId}&albumId=${albumId}`))
      // ?authId=${authId}
      console.log("response: ", res);
      this.setState({ albumPhotos: res[0].photos })
    }
    catch (err) {
      console.log(err);
    }
  }

  onAlbumClick(i){
    this.setState(prevState => ({
      showAlbumEntity: [...prevState.showAlbumEntity.slice(0, i),
        !prevState.showAlbumEntity[i],
        ...prevState.showAlbumEntity.slice(i+1, prevState.showAlbumEntity.length)],
    }));
    if (!this.state.showAlbumEntity[i]) {
      surfaceModule.album(this.state.album[i])
    }
    else surfaceModule.deAlbum()
    // else if (!this.state.clicked && this.state.count > 1) surfaceModule.dePic()
  }

  render() {
    const albums = []
    for(let i = 0; i < this.state.uri.length; i++){
      albums.push(
      // <VrButton
      //   style={styles.greetingBox}
      //   key={`pics${i}`}
      //   onClick={() => console.log('hello')}
      // >
      // <TouchableOpacity>
        <View key={`albums${i}`} style={styles.greetingBox}>
          <VrButton onClick={
            () => this.onAlbumClick(i)
          }>
            <Text>Album Title</Text>
            {/* <Pic uri={images[i].uri}/> */}
          </VrButton>
        </View>

      );
    }
    return (
      <View style={styles.panel}>
        {/* <View style={styles.greetingBox}>
          <Text>Albums</Text>
        </View>
        <VrButton onClick={
            () => this.onAlbumClick(i)
          }>
            <Text>Album Title</Text>
        </VrButton> */}
        {albums}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  panel: {
    display: 'flex',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotateX: 60 },
      { rotateY: -60 },
      { rotateZ: 61 },
      { translateX: 100 },
      { translateY: 390 },
      { translateZ: -230 },
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

AppRegistry.registerComponent('Albums', () => Albums);
