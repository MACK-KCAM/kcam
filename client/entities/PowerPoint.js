import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image
} from 'react-360';

export default class Travel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powerPoint: ["static_assets/powerpoint/0.png", "static_assets/powerpoint/1.png", "static_assets/powerpoint/2.png", "static_assets/powerpoint/3.png", "static_assets/powerpoint/4.png", "static_assets/powerpoint/5.png"],
      index: 0,
    }

    this.onPowerPointClickBack = this.onPowerPointClickBack.bind(this);
    this.onPowerPointClickForward = this.onPowerPointClickForward.bind(this);
  }

  onPowerPointClickBack (){
    if(this.state.index > 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }));
    } 
  }

  onPowerPointClickForward (){
    if(this.state.index < this.state.powerPoint.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }));
    } 
  }

  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={this.onPowerPointClickBack} style={styles.buttons}><Text style={styles.greeting}> &lt; </Text></VrButton>
          <View style={styles.greetingBox}>
            <Image style={styles.image} source={{ uri: this.state.powerPoint[this.state.index] }}></Image>
          </View>
        <VrButton onClick={this.onPowerPointClickForward} style={styles.buttons}><Text style={styles.greeting}>&gt;</Text></VrButton>
      </View>
    );
  }
  
};

export const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 850,
    height: 480,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: [
      { rotateX: 0 },
      { rotateY: -180 },
      { rotateZ: 0 },
      { translateX: 450 },
      { translateY: 200 },
      { translateZ: -700 },
    ]
  },
  greetingBox: {
    width: 750,
    height: 480,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:1,
  },
  greeting: {
    fontSize: 30,
  },
  buttons: {
    width: 50,
    height: 480,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    opacity:1,
  },
  image: {
    width: 750,
    height: 480,
  }
});

AppRegistry.registerComponent('PowerPoint', () => PowerPoint);