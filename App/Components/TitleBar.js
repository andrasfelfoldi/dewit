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

  constructor(props){
    super(props);

    this.state={
      isAddNoteVisible: false,
    };

    switch (props.title) {
      case 'Do':
        this.saveNote = props.saveDo;
        this.deleteMarkedNotes = props.deleteMarkedDos;
        break;
    
      case 'Delegate':
        this.saveNote = props.saveDelegate;
        this.deleteMarkedNotes = props.deleteMarkedDelegates;
        break;
    
      case 'Schedule':
        this.saveNote = props.saveSchedule;
        this.deleteMarkedNotes = props.deleteMarkedSchedules;
        break;
    
      case 'Eliminate':
        this.saveNote = props.saveEliminate;
        this.deleteMarkedNotes = props.deleteMarkedEliminates;
        break;
    
      default:
        this.saveNote = null;
        this.deleteMarkedNotes = null;
        break;
    }
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
                saveNote={this.saveNote} title={this.props.title}
                primaryColor={this.props.primaryColor} lightColor={this.props.lightColor}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.deleteMarkedNotes}>
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
    deleteMarkedSchedules: () => dispatch(NoteActions.deleteMarkedSchedules()),
    deleteMarkedDelegates: () => dispatch(NoteActions.deleteMarkedDelegates()),
    deleteMarkedEliminates: () => dispatch(NoteActions.deleteMarkedEliminates()),

    saveDo: ({text, isMarkedDone}) => dispatch(NoteActions.saveDo({text, isMarkedDone})),
    saveDelegate: ({text, isMarkedDone}) => dispatch(NoteActions.saveDelegate({text, isMarkedDone})),
    saveSchedule: ({text, isMarkedDone}) => dispatch(NoteActions.saveSchedule({text, isMarkedDone})),
    saveEliminate: ({text, isMarkedDone}) => dispatch(NoteActions.saveEliminate({text, isMarkedDone})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar);
