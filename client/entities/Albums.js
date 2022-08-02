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
const surfaceModule = NativeModules.surfaceModule;

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: false,
      showAlbumPhotos: [],
      showAlbums: [],
      albumPhotos: [],
      albums: 0, //["album1", "album2"]
      albumNames: [],
    };
    // this.onAlbumClick = this.onAlbumClick.bind(this);
    this.getAlbumImages = this.getAlbumImages.bind(this);
    this.getAlbums = this.getAlbums.bind(this);
  }

  getAlbumImages = async (albumId) => {
    // , {
    //   "authId": "0x002",
    // }
    const authId = "0x002";
    // const albumId = 2;
    try {
      const res = await Get(apiRoute.getRoute(`albums?authId=${authId}&albumId=${albumId}`))
      // ?authId=${authId}
      // console.log("response albums: ", res.albums);
      // if (this.state.showAlbums.includes(true)) {
      //   surfaceModule.deAlbumPics();
      // }
      this.setState(prevState => ({ 
        showAlbums: [...prevState.showAlbums.slice(0, albumId),
          !prevState.showAlbums[albumId],
          ...prevState.showAlbums.slice(albumId+1, prevState.showAlbums.length)],
        albumPhotos: res.photos,
        showAlbumPhotos: new Array(res.photos.length).fill(false),
      }))
      // if (this.state.showAlbums.includes(true)) {
      //   surfaceModule.deAlbumPics();
      // }
      // if (!this.state.showAlbums[albumId]) {
        surfaceModule.albumPics(this.state.albumPhotos);
      // } else {
      //   surfaceModule.deAlbumPics();
      // }
    }
    catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    this.getAlbums();
  }

  getAlbums = async () => {
    try {
      const authId = "0x002";
      const res = await Get(apiRoute.getRoute(`users?authId=${authId}`))
      // ?authId=${authId}
      console.log("response albums: ", res.albums);
      const names = [];
      for (let i = 0; i < res[0].albums.length; i++) {
        names.push(res[0].albums[i].name)
      }
      this.setState({ 
        albums: res[0].albums.length,
        albumNames: names,
        showAlbums: new Array(res[0].albums.length).fill(false),
      })
      console.log("SHOW ALBUMS: ", this.state.showAlbums)
    }
    catch (err) {
      console.log(err);
    }
  }

  // onAlbumClick(i){
  //   this.setState(prevState => ({
  //     showAlbumEntity: [...prevState.showAlbumEntity.slice(0, i),
  //       !prevState.showAlbumEntity[i],
  //       ...prevState.showAlbumEntity.slice(i+1, prevState.showAlbumEntity.length)],
  //   }));
  //   if (!this.state.showAlbumEntity[i]) {
  //     surfaceModule.album()
  //   }
  //   else surfaceModule.deAlbum()
  //   // else if (!this.state.clicked && this.state.count > 1) surfaceModule.dePic()
  // }

  render() {
    const albums = []
    for(let i = 1; i < this.state.albums; i++){
      albums.push(
      // <VrButton
      //   style={styles.greetingBox}
      //   key={`pics${i}`}
      //   onClick={() => console.log('hello')}
      // >
      // <TouchableOpacity>
        <View key={`albums${i}`} style={styles.greetingBox}>
          <VrButton onClick={
            () => this.getAlbumImages(i)
          }>
            <Text style = {styles.greeting}>{this.state.albumNames[i]}</Text>
            {/* <Pic uri={images[i].uri}/> */}
          </VrButton>
        </View>

      );
    }
    console.log("ALBUMS: ", albums);
    console.log(this.state.albumNames)
    return (
      <View style={styles.panel}>
        {/* <View style={styles.greetingBox}>
          <Text>Albums</Text>
        </View> */}
        {/* <VrButton onClick={
            () => this.onAlbumClick(i)
          }>
            <Text>Album Title</Text>
        </VrButton> */}
        {albums}
        <View>

        <View style={styles.inputBox}>

          <View style={styles.input} onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              console.log(inputEvent);
            }}>
              { /* ... */ }
              <Text style = {styles.inputText}>Image File</Text>
          </View>

          <View style={styles.input} onInput={e => {
              const inputEvent = e.nativeEvent.inputEvent;
              console.log(inputEvent);
            }}>
              { /* ... */ }
              <Text style = {styles.inputText}>Album Name</Text>
          </View>
          
          <VrButton><Text style = {styles.inputText}>Add Image</Text></VrButton>
          {/* <Text>Album Title</Text> */}

        </View>

        </View>

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
      { rotateX: -10 },
      { rotateY: 60 },
      { rotateZ: 10 },
      { translateX: -400 },
      { translateY: 170 },
      { translateZ: -500 },
      // { rotateX: 90 },
      // { rotateY: 90 },
      // { rotateZ: 91 },
      // { translateX: -20 },
      // { translateY: 300 },
      // { translateZ: 350 },
    ],
    flexWrap: 'wrap',
    maxWidth: 400,
  },
  greetingBox: {
    display:'flex',
    padding: 1,
    backgroundColor: '#2B2B68',
    borderColor: '#2B2B68',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    marginTop: '10em'
  },
  greeting: {
    fontSize: 30,
  },
  inputBox: {
    display:'flex',
    flexDirection: 'row',
    padding: 1,
    backgroundColor: '#2B2B68',
    borderColor: '#2B2B68',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
    marginTop: '10em'
  },
  input: {
    width: 100,
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  inputText: {
    fontSize: 20,
  }
});

AppRegistry.registerComponent('Albums', () => Albums);
