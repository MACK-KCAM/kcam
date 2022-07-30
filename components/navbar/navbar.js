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
import NavBarItem from './navbar_items';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={navBarStyle}>
        <NavBarItem button="Profile"/>
        <NavBarItem button="Travel Photos"/>
        <NavBarItem button="Add Photos"/>
        <NavBarItem button="Settings"/>
      {/* <View style={{
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        // marginBottom: 0,
        // marginTop: 100,
      }}>
        <VrButton  style={{
          transform: [
            {translate: [0, 2, -5]},
            {rotateX: 45},
        ]}} onClick={() => console.log("clicked")}><Text>profile</Text></VrButton>
      </View> */}
      </View>
    )
  }
}

const navBarStyle = {
  display: 'flex',
  flex: 0,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
}

AppRegistry.registerComponent('NavBar', () => NavBar);