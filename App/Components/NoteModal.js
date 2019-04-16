import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity, TextInput } from 'react-native'
import styles from './Styles/NoteModalStyle'
import Modal from "react-native-modal";
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { material } from 'react-native-typography'
import { connect } from "react-redux";
import NoteActions from "../Redux/NoteRedux";

class NoteModal extends Component {
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

  state={
    text: '',
  }

  title=`New task to ${this.props.title}`;

  saveItem = () => {
    this.props.saveNote({text: this.state.text, isMarkedDone: false});
    this.setState({text: ''});
    this.props.closeAction();
  }

  textChanged = (newText) => {
    this.setState({text: newText});
  }

  render () {
    return (
      <Modal isVisible={this.props.visible}>
        {/* <TouchableWithoutFeedback onPress={this.props.closeAction}> */}
          <View style={styles.container} >
            <View style={{...styles.inputContainer, backgroundColor: this.props.lightColor}}  >
              <View style={{...styles.header, backgroundColor: this.props.primaryColor}} >
              <Text style={material.titleWhite}>{this.title}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={this.saveItem}>
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

              <TextInput onChangeText={this.textChanged}>{this.state.text}</TextInput>

            </View>
          </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveDo: ({text, isMarkedDone}) => dispatch(NoteActions.saveDo({text, isMarkedDone})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteModal);