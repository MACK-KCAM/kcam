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

export default class TravelPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>Album: </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TravelPhotos', () => TravelPhotos);