import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles/NoteModalStyle'
import Modal from "react-native-modal";

export default class NoteModal extends Component {
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
      <Modal isVisible={this.props.visible}>
        <TouchableWithoutFeedback onPress={this.props.closeAction}>
          <View style={styles.container} >
            <View style={styles.inputContainer}>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}
