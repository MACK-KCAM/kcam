import React, { Profiler } from 'react';
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
    this.state = {
      showProfile: false,
      showTravelPhotos: false,
      showAddPhotos: false,
      showSettings: false,
    };
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onTravelPhotosClick = this.onTravelPhotosClick.bind(this);
    this.onAddPhotosClick = this.onAddPhotosClick.bind(this);
    this.onSettingsClick = this.onSettingsClick.bind(this);
  }

  onProfileClick() {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile,
    }));
  }

  onTravelPhotosClick() {
    this.setState(prevState => ({
      showTravelPhotos: !prevState.showTravelPhotos,
    }));
  }

  onAddPhotosClick() {
    this.setState(prevState => ({
      showAddPhotos: !prevState.showAddPhotos,
    }));
  }

  onSettingsClick() {
    this.setState(prevState => ({
      showSettings: !prevState.showSettings,
    }));
  }

  render () {
    return (
      <View style={navBarStyle}>
        <NavBarItem onButtonClick={this.onProfileClick.bind(this)} button="Profile" showProfile={this.state.showProfile}/>
        <NavBarItem onButtonClick={this.onTravelPhotosClick.bind(this)} button="Travel Photos" showTravelPhotos={this.state.showTravelPhotos}/>
        <NavBarItem onButtonClick={this.onAddPhotosClick.bind(this)} button="Add Photos" showAddPhotos={this.state.showAddPhotos}/>
        <NavBarItem onButtonClick={this.onSettingsClick.bind(this)} button="Settings" showSettings={this.state.showSettings}/>
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