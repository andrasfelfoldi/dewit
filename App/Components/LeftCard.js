import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput } from 'react-native'
import styles from './Styles/LeftCardStyle'
import { Colors, Metrics } from '../Themes'

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
      <ScrollView style={{...styles.leftCard,
        backgroundColor: this.props.title === 'Do' ? Colors.lightGreen : Colors.lightOrange }}>
        <TextInput style={{ width: 100, backgroundColor: '#FFFFFF'}}></TextInput>

      </ScrollView>
    )
  }
}
