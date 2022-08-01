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

import Profile from '../profile/Profile.js';
import Settings from '../Settings/Settings.js';
import TravelPhotos from '../TravelPhotos/TravelPhotos.js';
import AddPhotos from '../AddPhotos/AddPhotos.js';
import Travel from '../../entities/Travel.js';

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   showComponent: false,
    // };
    // this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick = () => {
    this.props.onButtonClick();
  }

  render () {
    console.log(this.props);
    return (
      <View style={{
        // display: 'flex',
        // flex: 0,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // backgroundColor:'#000000',
        color:'#000000'
      }}>
        <VrButton  style={{
          transform: [
            {translate: [0, 2, -5]},
            {rotateX: 45},

        ]}} onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
          this.onButtonClick();
        }}><Text>{this.props.button}</Text></VrButton>
        {
          this.props.showProfile ? <Profile /> : null
        }
        {
          this.props.showTravelPhotos ? <TravelPhotos /> : null
        }
        {
          this.props.showAddPhotos ? <AddPhotos /> : null
        }
        {
          this.props.showSettings ? <Settings /> : null
        }
        {/* {
          this.props.showTravelEntity ? <Travel /> : null
        } */}
      </View>
    )
  }
}