import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput, View, Text } from 'react-native'
import styles from './Styles/LeftCardStyle'
import { Colors, Metrics } from '../Themes'
import ToDoEntry from './ToDoEntry';
import TitleBar from './TitleBar';
import NoteActions from "../Redux/NoteRedux";
import { connect } from "react-redux";
// import { View } from 'react-native-animatable';


class LeftCard extends Component {
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

  primaryColor = this.props.title === 'Do' ? Colors.green : Colors.orange;
  lightColor = this.props.title === 'Do' ? Colors.lightGreen : Colors.lightOrange;

  markDo = (index) => {
    this.props.markDo(index);
  }

  markDelegate = (index) => {
    this.props.markDelegate(index);
  }

  markNote = this.props.title === 'Do' ? this.markDo : this.markDelegate;

  render () {
    return (
      <View style={{...styles.leftCard,
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
    notes: ownProps.title === 'Do' ? state.notes.dos : state.notes.delegates,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markDo: (index) => dispatch(NoteActions.markDo(index)),
    markDelegate: (index) => dispatch(NoteActions.markDelegate(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftCard);
