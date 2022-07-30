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
    // this.state = {
    //   showProfile: true,
    // }
  }

  // mountNewComponent() {    
  //   postMessage({ type: "newComponent"});
  // }

  // componentDidMount () {
  //   this.setState({ showProfile: false })
  // }

  render () {
    // const showProfile = this.state.showProfile;
    return (
      <View>
        {/* { showProfile ? (
          <Text>User: </Text>
        ) : (
          <Text></Text>
        )
        } */}
        <Text>User: </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Profile', () => Profile);