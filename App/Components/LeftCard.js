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

  render () {
    return (
      <View style={{...styles.leftCard,
        backgroundColor: this.lightColor }}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

          {this.props.dos.map((doObject, index) => <ToDoEntry key={index} completed={doObject.isMarkedDone} text={doObject.text} onPress={() => this.markDo(index)} color={this.primaryColor}/>)}
          
          {/* <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/> */}

        </ScrollView>

        <TitleBar primaryColor={this.primaryColor} lightColor={this.lightColor} title={this.props.title} />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dos: state.notes.dos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markDo: (index) => dispatch(NoteActions.markDo(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftCard);
