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

    this.isLeftShown = true;
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

        // this.animate();
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}

        let newValue = gestureState.dx > -(Metrics.screenWidth / 2) ? 0 : -Metrics.screenWidth;
        this.isLeftSide = gestureState.dx > -(Metrics.screenWidth / 2);

        // if(this.isLeftSide){

        //   newValue = gestureState.dx > 0 ? 0 : -Metrics.screenWidth;
        //   Animated.spring(
        //     this.state.progress.x,
        //     {
        //       toValue: newValue,
        //     } 
        //   ).start(() => this.isLeftSide = false);

        //   // this.isLeftSide = false;
        // }else{

        //   newValue = gestureState.dx > 0 ? 0 : -Metrics.screenWidth;
        //   Animated.spring(
        //     this.state.progress.x,
        //     {
        //       toValue: newValue,
        //     } 
        //   ).start(() => this.isLeftSide = true);

        //   // this.isLeftSide = true;
        // }
        
        Animated.spring(
          this.state.progress.x,
          {
            toValue: newValue,
          } 
        ).start();
      },
      onPanResponderMove: Animated.event([
        null,                // raw event arg ignored
        {dx: this.state.progress.x}],    // gestureState arg
        
      ),
    });
  }

  // updateCurrentProgressValue = (value) => {
  //   this.progressValue = value.x;

  //   console.log(this.progressValue);
  // };

  // componentDidMount = () => {
  //   this.updateCurrentProgressValueListenerId = this.state.progress.addListener(this.updateCurrentProgressValue.bind(this));
  // }

  // componentWillUnmount = () => {
  //   this.state.progress.removeListener(this.updateCurrentProgressValueListenerId);
  // }

  // animate = () => {

  //   Animated.timing(this.state.progress.x, {
  //     toValue: this.isLeftShown ? 1 : 0,
  //     duration: 200,
  //     useNativeDriver: true,
  //   }).start();

  //   this.isLeftShown = ! this.isLeftShown;
  // }

  render () {

    return (
      <Animated.View onPress={this.props.onPress}
        style={{...styles.container, transform: [{translateX: this.cardTranslateX}] }}
        {...this._panResponder.panHandlers}>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <React.Fragment> */}


        {/* =========================
                    Left
          ========================= */}

        <LeftCard title={this.props.leftTitle} />

        <View style={{...styles.leftTitleBar,
              backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange }}>
          <Text >{this.props.leftTitle}</Text>
        </View>

        {/* <TouchableOpacity onPress={this.animate}
          style={{...styles.rightTab,
          backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red }}>
        </TouchableOpacity> */}

        {/* <View style={{...styles.leftDecor,
              backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange,
              height: Metrics.navBarHeight,
              ...decorPositionProp }} /> */}

        {/* =========================
                    Right
          ========================= */}
        
        <RightCard title={this.props.rightTitle} />

        <View style={{...styles.rightTitleBar,
              backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red }}>
          <Text >{this.props.rightTitle}</Text>
        </View>

        


        {/* <TouchableOpacity onPress={this.animate}
          style={{...styles.leftTab,
          backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange }}>
          
        </TouchableOpacity> */}

        {/* <View style={{...styles.rightDecor,
              backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red,
              height: Metrics.navBarHeight,
              ...decorPositionProp }} /> */}

{/* </React.Fragment>

      </TouchableWithoutFeedback> */}
      </Animated.View>
    )
  }
}