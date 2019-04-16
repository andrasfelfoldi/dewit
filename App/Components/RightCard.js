import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput, View, CheckBox } from 'react-native'
import styles from './Styles/RightCardStyle'
import { Colors, Metrics } from '../Themes'
import ToDoEntry from './ToDoEntry';
import TitleBar from './TitleBar';
import NoteActions from "../Redux/NoteRedux";
import { connect } from "react-redux";
// import { View } from 'react-native-animatable';


class RightCard extends Component {
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

  primaryColor = this.props.title === 'Schedule' ? Colors.blue : Colors.red;
  lightColor = this.props.title === 'Schedule' ? Colors.lightBlue : Colors.lightRed;

  markSchedule = (index) => {
    this.props.markSchedule(index);
  }

  markEliminate = (index) => {
    this.props.markEliminate(index);
  }

  markNote = this.props.title === 'Schedule' ? this.markSchedule : this.markEliminate;

  render () {
    return (
      <View style={{...styles.rightCard,
        backgroundColor: this.lightColor }}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

        {this.props.notes.map((note, index) => 
            <ToDoEntry key={index} completed={note.isMarkedDone}
              text={note.text} onPress={() => this.markNote(index)} color={this.primaryColor}/>)}

        </ScrollView>

        <TitleBar primaryColor={this.primaryColor} lightColor={this.lightColor} title={this.props.title} />

      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: ownProps.title === 'Schedule' ? state.notes.schedules : state.notes.eliminates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markSchedule: (index) => dispatch(NoteActions.markSchedule(index)),
    markEliminate: (index) => dispatch(NoteActions.markEliminate(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RightCard);