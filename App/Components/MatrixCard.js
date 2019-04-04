import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, Animated, TouchableWithoutFeedback, Keyboard, PanResponder } from 'react-native'
import { Colors, Metrics } from '../Themes'
import styles from './Styles/MatrixCardStyle'
import LeftCard from './LeftCard';
import RightCard from './RightCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MatrixCard extends Component {

  constructor(props){
    super(props);
    
    this.state={ progress: new Animated.ValueXY({ x: 0, y: 0 }) };

    this.isLeftSide = true;
    this.leftColor = props.leftTitle === 'Do' ? Colors.green : Colors.orange;
    this.rightColor = props.leftTitle === 'Do' ? Colors.blue : Colors.red;

    this.cardTranslateX = this.state.progress.x.interpolate({
      inputRange: [-Metrics.screenWidth, 0],
      outputRange: [-Metrics.screenWidth, 0],
    });

    this.circleScale = this.state.progress.x.interpolate({
      inputRange: [-Metrics.screenWidth, 0],
      outputRange: [3.1, 1],
    });

    this.rotate = this.state.progress.x.interpolate({
      inputRange: [-Metrics.screenWidth, 0],
      outputRange: ['180deg', '0deg'],
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

        <LeftCard title={this.props.leftTitle} />
        
        <RightCard title={this.props.rightTitle} />

        <TouchableOpacity onPress={this.animate}
          style={{...styles.arrowTab,
          backgroundColor: this.rightColor }}>

          <Animated.View style={{...styles.secondaryColorCircle,
            backgroundColor: this.leftColor,
            transform: [{scale: this.circleScale}] }} />

          <Animated.View style={{transform: [{rotate: this.rotate}] }}>
            <Icon style={styles.arrowIcon} name="chevron-left" size={30} color="#FFFFFF" />
          </Animated.View>
        </TouchableOpacity>

      </Animated.View>
    )
  }
}