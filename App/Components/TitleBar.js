import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/TitleBarStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoteModal from './NoteModal';

export default class TitleBar extends Component {

  state={
    isAddNoteVisible: false,
  }

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

  showAddNoteModal = () => {
    this.setState({isAddNoteVisible: true});
  }
  
  closeAddNoteModal = () => {
    this.setState({isAddNoteVisible: false});
  }

  render () {
    return (
      <View style={{...styles.titleBar,
        backgroundColor: this.props.color }}>
        <Text >{this.props.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.showAddNoteModal}>
            <View style={styles.button}>
              <Icon name="note-add" size={30} color="#FFFFFF" />
              <NoteModal visible={this.state.isAddNoteVisible} closeAction={this.closeAddNoteModal} />
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
