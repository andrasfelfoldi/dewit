import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/TitleBarStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoteModal from './NoteModal';
import { material } from 'react-native-typography';
import { connect } from "react-redux";
import NoteActions from "../Redux/NoteRedux";

class TitleBar extends Component {

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
        backgroundColor: this.props.primaryColor }}>
        <Text style={material.titleWhite}>{this.props.title}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.showAddNoteModal}>
            <View style={styles.button}>
              <Icon name="note-add" size={30} color="#FFFFFF" />
              <NoteModal visible={this.state.isAddNoteVisible} closeAction={this.closeAddNoteModal}
                primaryColor={this.props.primaryColor} lightColor={this.props.lightColor} title={this.props.title}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.deleteMarkedDos}>
            <View style={styles.button}>
              <Icon name="delete" size={30} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMarkedDos: () => dispatch(NoteActions.deleteMarkedDos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
