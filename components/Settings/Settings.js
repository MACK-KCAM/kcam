import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,
    VrButton,
} from 'react-360';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>Settings: </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Settings', () => Settings);