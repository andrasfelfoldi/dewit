import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, TextInput, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/ToDoEntryStyle'
import { Colors } from '../Themes';

export default class ToDoEntry extends Component {
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

  state = {
    completed: false,
  }

  render () {
    return (
        <TouchableWithoutFeedback onPress={() => this.setState({completed: !this.state.completed})}>
          <View style={{...styles.container, borderBottomColor: this.props.color}}>
            <Text editable={false} multiline={true}
                  style={{...styles.text, textDecorationLine: this.state.completed ? 'line-through' : 'none'}}>
              Sample Text
            </Text>
          </View>
        </TouchableWithoutFeedback>
    )
  }
}
