import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Plane,
    VrButton,
    StyleSheet,
    Image
} from 'react-360';

export default class TravelPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <View>
        <View style={styles.mainView}>
          <View style={styles.albumTitleBox}>
            <Text style={styles.albumTitle}>Album: Greece </Text>
          </View>
          <View>
            <Image style={styles.flag} source={{uri: "static_assets/greece/beach.jpeg"}}></Image>
            <Image style={styles.flag} source={{uri: "static_assets/greece/santorini.jpeg"}}></Image>
            {/* <Image src="static_assets/greece/santorini.jpeg"></Image> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
      width: 800,
      height: 400,
      backgroundColor: '#eee',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  },
  flag: {
      width: 400,
      height: '40%'
  },
  albumTitleBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumTitle: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('TravelPhotos', () => TravelPhotos);