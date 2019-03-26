import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/ToDoItemStyle'

export default class ToDoItem extends Component {
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
      <TouchableOpacity style={styles.card} onPress={this.props.onPress}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.textContent}>{this.props.content}</Text>
      </TouchableOpacity>
    )
  }
}
