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

export default class AlbumPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: false,
    };

  }

  render() {
    const pics = [];
    for (let i = 0; i < this.props.pics.length; i++) {
      pics.push(
        <View key={`pics${i}`} style={styles.greetingBox}>
          {/* <VrButton onClick={console.log('image clicked')}> */}
            <Image
              style={{ width: 75, height: 75, borderRadius: 10 }}
              source={{ uri:  this.props.pics[i]}}
            ></Image>
          {/* </VrButton> */}
        </View>
      );
    }
    // const uri = this.props.uri;
    return (
      <View style={styles.panel}>
          {/* <Image
            style={{ width: 310, height: 290, borderRadius: 10 }}
            source={{uri: this.props.pics}}
        ></Image> */}
        {pics}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  panel: {
    display: 'flex',
    height: 300,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotateX: -10 },
      { rotateY: 60 },
      { rotateZ: 10 },
      { translateX: -400 },
      { translateY: 480 },
      { translateZ: -500 },
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

AppRegistry.registerComponent('AlbumPics', () => AlbumPics);
