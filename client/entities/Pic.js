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

export default class Pic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clicked: false,
    };

  }

  render() {
    // const pics = [];
    // for (let i = 0; i < 12; i++) {
    //   pics.push(
    //     // <VrButton
    //     //   style={styles.greetingBox}
    //     //   key={`pics${i}`}
    //     //   onClick={() => console.log('hello')}
    //     // >
    //     // <TouchableOpacity>
    //     <View key={`pics${i}`} style={styles.greetingBox}>
    //       <VrButton onClick={console.log('image clicked')}>
    //         <Image
    //           style={{ width: 75, height: 75, borderRadius: 10 }}
    //           source={{ uri: 'static_assets/greece/santorini.jpeg' }}
    //         ></Image>
    //       </VrButton>
    //     </View>
    //   );
    // }
    // const uri = this.props.uri;
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Image
            style={{ width: 310, height: 290, borderRadius: 10 }}
            source={{uri: this.props.url}}
        ></Image>
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

AppRegistry.registerComponent('Pic', () => Pic);
