import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/TitleBarStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TitleBar extends Component {
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
      <View style={{...styles.titleBar,
        backgroundColor: this.props.color }}>
        <Text >{this.props.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon name="note-add" size={30} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Icon name="delete" size={30} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
