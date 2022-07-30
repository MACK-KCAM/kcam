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

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  mountNewComponent() {    
    postMessage({ type: "newComponent"});
  }
  
  render () {
    return (
      <View>
        <Text>User: </Text>
        {/* <Image> </Image> */}
      </View>
    );
  }
}

AppRegistry.registerComponent('Profile', () => Profile);