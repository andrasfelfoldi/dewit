import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/NewItemButtonStyle'

export default class NewItemButton extends Component {
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
      <TouchableOpacity style={styles.circle} onPress={this.props.onPress}>
        <Text style={styles.text}><Icon name="plus" size={30} color="#900" /></Text>
      </TouchableOpacity>
    )
  }
}
