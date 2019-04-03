import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, Animated, TouchableWithoutFeedback, Keyboard, PanResponder } from 'react-native'
import { Colors, Metrics } from '../Themes'
import styles from './Styles/MatrixCardStyle'
import LeftCard from './LeftCard';
import RightCard from './RightCard';

export default class MatrixCard extends Component {

  constructor(props){
    super(props);
    
    this.state={
      progress: new Animated.ValueXY({ x: 0, y: 0 }),

    }

    this.isLeftSide = true;

    this.cardTranslateX = this.state.progress.x.interpolate({
      inputRange: [-Metrics.screenWidth, 0],
      outputRange: [-Metrics.screenWidth, 0],
    });

    
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        Keyboard.dismiss();
        
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        gestureState.dx = this.isLeftSide ? 0 : -Metrics.screenWidth;
      },
      onPanResponderRelease: (evt, gestureState) => {

        let newValue = gestureState.dx > -(Metrics.screenWidth / 2) ? 0 : -Metrics.screenWidth;
        this.isLeftSide = gestureState.dx > -(Metrics.screenWidth / 2);
        
        Animated.spring(
          this.state.progress.x,
          {
            toValue: newValue,
            useNativeDriver: true,
          } 
        ).start();
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.progress.x, useNativeDriver: true}],
      ),
    });
  }

  animate = () => {

    Animated.timing(this.state.progress.x, {
      toValue: this.isLeftSide ? -Metrics.screenWidth : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    this.isLeftSide = ! this.isLeftSide;
  }

  render () {
    return (
      <Animated.View onPress={this.props.onPress}
        style={{...styles.container, transform: [{translateX: this.cardTranslateX}] }}
        {...this._panResponder.panHandlers}>

        {/* =========================
                    Left
          ========================= */}

        <LeftCard title={this.props.leftTitle} />

        <TouchableOpacity onPress={this.animate}
          style={{...styles.rightTab,
          backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red }}>
        </TouchableOpacity>

        {/* =========================
                    Right
          ========================= */}
        
        <RightCard title={this.props.rightTitle} />

        <TouchableOpacity onPress={this.animate}
          style={{...styles.leftTab,
          backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange }}>
          
        </TouchableOpacity>
      </Animated.View>
    )
  }
}