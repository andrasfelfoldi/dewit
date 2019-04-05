import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'
import styles from './Styles/NoteModalStyle'
import Modal from "react-native-modal";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
              <View style={styles.header}>
              <Text >Title</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={this.showAddNoteModal}>
                    <View style={styles.button}>
                      <EntypoIcon name="save" size={30} color="#FFFFFF" />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.props.closeAction}>
                    <View style={styles.button}>
                      <Icon name="close" size={30} color="#FFFFFF" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <TextInput>asdasljdlkasjdlkasjdkldjakls</TextInput>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
  }
}
