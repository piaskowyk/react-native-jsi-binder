/* eslint-disable */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Animated from 'react-native-reanimated';

const {
  set,
  cond,
  startClock,
  stopClock,
  clockRunning,
  block,
  debug,
  spring,
  Value,
  Clock,
  proc,
} = Animated;

const betterSpring = proc(
  (
    finished,
    velocity,
    position,
    time,
    prevPosition,
    toValue,
    damping,
    mass,
    stiffness,
    overshootClamping,
    restSpeedThreshold,
    restDisplacementThreshold,
    clock
  ) =>
    spring(
      clock,
      {
        finished,
        velocity,
        position,
        time,
        prevPosition,
      },
      {
        toValue,
        damping,
        mass,
        stiffness,
        overshootClamping,
        restDisplacementThreshold,
        restSpeedThreshold,
      }
    )
);

function springFill(clock, state, config) {
  return betterSpring(
    state.finished,
    state.velocity,
    state.position,
    state.time,
    new Value(0),
    config.toValue,
    config.damping,
    config.mass,
    config.stiffness,
    config.overshootClamping,
    config.restSpeedThreshold,
    config.restDisplacementThreshold,
    clock
  );
}
const stopClockProc = proc(clock => stopClock(clock));
const startClockProc = proc(clock => startClock(clock));

function runSpring(clock, value, dest) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    damping: 7,
    mass: 5,
    stiffness: 121.6,
    overshootClamping: false,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.velocity, -2500),
      set(config.toValue, dest),
      startClockProc(clock),
    ]),
    springFill(clock, state, config),
    cond(state.finished, debug('stop clock', stopClockProc(clock))),
    state.position,
  ]);
}

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.t = Array.from(Array(40)).map(() =>
      runSpring(new Clock(), Math.random() * -200, Math.random() * 200)
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {Array.from(Array(40)).map((_, i) => (
          <Animated.View
            key={i}
            style={[styles.box, { transform: [{ translateX: this.t[i] }] }]}
          />
        ))}
      </View>
    );
  }
}

const BOX_SIZE = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  box: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderColor: '#F5FCFF',
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 2,
  },
});
