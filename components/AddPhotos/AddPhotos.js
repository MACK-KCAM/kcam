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

export default class AddPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <Text>Add Photos: </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('AddPhotos', () => AddPhotos);