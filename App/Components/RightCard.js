import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput, View, CheckBox } from 'react-native'
import styles from './Styles/RightCardStyle'
import { Colors, Metrics } from '../Themes'
import ToDoEntry from './ToDoEntry';
import TitleBar from './TitleBar';
// import { View } from 'react-native-animatable';


export default class RightCard extends Component {
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

  render () {
    return (
      <View style={{...styles.rightCard,
        backgroundColor: this.lightColor }}>
        <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1 }}>

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
