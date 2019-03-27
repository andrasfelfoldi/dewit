import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { ScrollView, TextInput } from 'react-native'
import styles from './Styles/RightCardStyle'
import { Colors, Metrics } from '../Themes'

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

  render () {
    return (
      <ScrollView style={{...styles.rightCard,
        backgroundColor: this.props.title === 'Schedule' ? Colors.lightBlue : Colors.lightRed }}>
        <TextInput style={{ width: 100, backgroundColor: '#FFFFFF'}}></TextInput>
      </ScrollView>
    )
  }
}
