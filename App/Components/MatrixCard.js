import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native'
import { Colors } from '../Themes'
import styles from './Styles/MatrixCardStyle'

export default class DoCard extends Component {
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

  render () {
    return (
      <View onPress={this.props.onPress}
        style={{...styles.card, backgroundColor: this.props.leftTitle === 'Do' ? Colors.lightGreen : Colors.lightOrange}}>
        <View style={{...styles.titleBar, backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange}}>
          <Text >{this.props.leftTitle}</Text>
        </View>
        <TouchableOpacity style={{...styles.rightTab, backgroundColor: this.props.leftTitle === 'Do' ? Colors.green : Colors.orange}}/>

      </View>
    )
  }
}