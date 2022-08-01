import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';

export default function PowerPoint() {
  return (
    <View style={styles.panel}>
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>
          PowerPoint
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 850,
    height: 480,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      { rotateX: 0 },
      { rotateY: -180 },
      { rotateZ: 0 },
      { translateX: 450 },
      { translateY: 200 },
      { translateZ: -700 },
    ]
  },
  greetingBox: {
    padding: 200,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:1,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('PowerPoint', () => PowerPoint);