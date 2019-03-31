import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Colors, Metrics } from '../Themes'
import styles from './Styles/MatrixCardStyle'
import LeftCard from './LeftCard';
import RightCard from './RightCard';

export default class MatrixCard extends Component {

  state={
    progress: new Animated.Value(0),
  }

  cardTranslateX = this.state.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -Metrics.screenWidth],
  });

  isLeftShown = true;

  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  animate = () => {

    Animated.timing(this.state.progress, {
      toValue: this.isLeftShown ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    this.isLeftShown = ! this.isLeftShown;
  }

  render () {

    let decorPositionProp = {};

    if(this.props.leftTitle === 'Do'){
      decorPositionProp["top"] = -Metrics.navBarHeight;
    }else{
      decorPositionProp["bottom"] = -Metrics.navBarHeight;
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Animated.View onPress={this.props.onPress}
        style={{...styles.container, transform: [{translateX: this.cardTranslateX}] }}>


        {/* =========================
                    Left
          ========================= */}

        <LeftCard title={this.props.leftTitle} />

        <View style={{...styles.leftTitleBar,
              backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange }}>
          <Text >{this.props.leftTitle}</Text>
        </View>

        <TouchableOpacity onPress={this.animate}
          style={{...styles.rightTab,
          backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red }}>
        </TouchableOpacity>

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

        


        <TouchableOpacity onPress={this.animate}
          style={{...styles.leftTab,
          backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange }}>
          
        </TouchableOpacity>

        {/* <View style={{...styles.rightDecor,
              backgroundColor: this.props.rightTitle === 'Schedule' ? Colors.blue : Colors.red,
              height: Metrics.navBarHeight,
              ...decorPositionProp }} /> */}

      </Animated.View>
      </TouchableWithoutFeedback>
    )
  }
}