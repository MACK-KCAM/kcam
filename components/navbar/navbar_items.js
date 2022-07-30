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

export default class NavBarItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <View style={{
        display: 'flex',
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <VrButton  style={{
          transform: [
            {translate: [0, 2, -5]},
            {rotateX: 45},
        ]}} onClick={() => console.log("clicked")}><Text>{this.props.button}</Text></VrButton>
      </View>
    )
  }
}