import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'
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
      <TouchableOpacity style={{...styles.card, backgroundColor: this.props.backgroundColor}} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.title}</Text>
      
      </TouchableOpacity>
    )
  }
}