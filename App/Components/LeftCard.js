import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput } from 'react-native'
import styles from './Styles/LeftCardStyle'
import { Colors, Metrics } from '../Themes'
import { View } from 'react-native-animatable';

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

  render () {
    return (
      <View style={{...styles.leftCard,
        backgroundColor: this.props.title === 'Do' ? Colors.lightGreen : Colors.lightOrange }}>
        <ScrollView style={styles.scrollView}>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#FFFFFF', marginBottom: 5}}></TextInput>
          <TextInput multiline={true} style={{ width: 300, backgroundColor: '#000000', marginBottom: 5}}></TextInput>

        </ScrollView>
      </View>
    )
  }
}
