import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.13

import HomeScreen from './src/HomeScreen';
import GameScreen from './src/GameScreen';
import ScoreScreen from './src/ScoreScreen';
import CreditScreen from './src/CreditScreen';

export const NavApp = StackNavigator({
  Home: { screen: HomeScreen },
  Game: { screen: GameScreen },
  Score: { screen: ScoreScreen },
  Credit: { screen: CreditScreen },
});

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <NavApp />;
  }
}

