import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput, View, Text } from 'react-native'
import styles from './Styles/LeftCardStyle'
import { Colors, Metrics } from '../Themes'
import ToDoEntry from './ToDoEntry';
import TitleBar from './TitleBar';
// import { View } from 'react-native-animatable';


export default class LeftCard extends Component {
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

  render () {
    return (
      <View style={{...styles.leftCard,
        backgroundColor: this.lightColor }}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

          <TextInput ></TextInput>
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
          <ToDoEntry color={this.primaryColor}/>
          <ToDoEntry color={this.primaryColor}/>

        </ScrollView>

        <TitleBar color={this.primaryColor} title={this.props.title} />
      </View>
    )
  }
}
