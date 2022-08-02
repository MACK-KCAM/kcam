import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  asset,
  Animated,
  NativeModules,
  VrButton
} from 'react-360';
const { AudioModule } = NativeModules;
// import { connect } from '../Store';
import Entity from 'Entity';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default function Pikachu() {
  const transform = [
    { translate: [15, -1, 20] },
    { scaleX: 10 },
    { scaleY: 10 },
    { scaleZ: 10 },
    { rotateY: 45 }
  ]
  return (
    <AnimatedEntity style={{ transform }} source={{
                        obj: asset(
                            `pikachu/model.obj`
                        ),
                        mtl: asset(
                            `pikachu/materials.mtl`
                        )
                    }} />
  )
}

AppRegistry.registerComponent('Pikachu', () => Pikachu);