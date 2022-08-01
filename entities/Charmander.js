import React, { PureComponent } from 'react';
import {
  AppRegistry,
  StyleSheet,
  asset,
  Animated,
  NativeModules,
  VrButton
} from 'react-360';
import Entity from 'Entity';
const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default function Charmander() {
  const transform = [
    { translate: [-2, -1, 2.5] },
    { scaleX: 0.759 },
    { scaleY: 0.759 },
    { scaleZ: 0.759 },
    { rotateY: -45 }
  ]
  return (
    <AnimatedEntity style={{ transform }} source={{
                        obj: asset(
                            `charmander/model.obj`
                        ),
                        mtl: asset(
                            `charmander/materials.mtl`
                        )
                    }} />
  )
}

AppRegistry.registerComponent('Charmander', () => Charmander);