import React, { Profiler } from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,NativeModules,
    View,
    Plane,
    VrButton,

} from 'react-360';
import NavBarItem from './navbar_items';
const surfaceModule = NativeModules.surfaceModule;

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: false,
      showTravelPhotos: false,
      showAddPhotos: false,
      showSettings: false,
      showTravelEntity: false,
      click: 0
    };
    this.onProfileClick = this.onProfileClick.bind(this);
    this.onTravelPhotosClick = this.onTravelPhotosClick.bind(this);
    this.onAddPhotosClick = this.onAddPhotosClick.bind(this);
    this.onSettingsClick = this.onSettingsClick.bind(this);
    this.onTravelEntityClick = this.onTravelEntityClick.bind(this);
  }

  onProfileClick() {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile,
    }));
  }

  onTravelPhotosClick() {
    this.setState(prevState => ({
      showTravelPhotos: !prevState.showTravelPhotos
      // showTravel : !prevState.showTravel
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

  onTravelEntityClick(){
    this.setState(prevState => ({
      showTravelEntity: !prevState.showTravelEntity,
    }));
    if (!this.state.showTravelEntity) surfaceModule.travel()
    else surfaceModule.deTravel()
  }


  render () {
    return (
      <View style={navBarStyle}>
        <NavBarItem onButtonClick={this.onProfileClick.bind(this)} button="Profile" showProfile={this.state.showProfile}/>
        <NavBarItem onButtonClick={this.onTravelPhotosClick.bind(this)} button="Travel Photos" showTravelPhotos={this.state.showTravelPhotos}/>
        <NavBarItem onButtonClick={this.onAddPhotosClick.bind(this)} button="Add Photos" showAddPhotos={this.state.showAddPhotos}/>
        <NavBarItem onButtonClick={this.onSettingsClick.bind(this)} button="Settings" showSettings={this.state.showSettings}/>
        {/* <NavBarItem onButtonClick={this.onTravelEntityClick.bind(this)} button="Travel Entity" onClick ={/> */}
        <VrButton onClick={this.onTravelEntityClick}><Text>Travel Entity</Text></VrButton>
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
  // position: 'absolute',
  // left: 0,
  // bottom: 0,
  // right: 0,
}

AppRegistry.registerComponent('NavBar', () => NavBar);