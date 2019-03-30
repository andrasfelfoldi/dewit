import React, { Component } from 'react'
import { TouchableWithoutFeedback, Text, KeyboardAvoidingView, Keyboard, Platform } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'
import MatrixCard from '../Components/MatrixCard';

class MainScreen extends Component {

  state = {
    keyboardAvoidingViewKey: 'keyboardAvoidingViewKey',
  }

  keyboardHideListener() {
    this.setState({
        keyboardAvoidingViewKey: 'keyboardAvoidingViewKey' + new Date().getTime()
    });
}

  componentDidMount() {
    // using keyboardWillHide is better but it does not work for android
    this.keyboardHideListener = Keyboard.addListener(Platform.OS === 'android' ? 'keyboardDidHide': 'keyboardWillHide', this.keyboardHideListener.bind(this));
  }

  componentWillUnmount() {
      this.keyboardHideListener.remove()
  }

  render () {
    return (
        // <KeyboardAvoidingView behavior='padding' style={styles.container} key={this.state.keyboardAvoidingViewKey}>
        <KeyboardAvoidingView style={styles.container} key={this.state.keyboardAvoidingViewKey}>
          {/* <View style={styles.row}> */}
            <MatrixCard leftTitle="Do" rightTitle="Schedule"
              onPress={() => this.props.navigation.navigate('NotesScreen')}/>
          {/* </View> */}
          {/* <View style={styles.row}> */}
            <MatrixCard leftTitle="Delegate" rightTitle="Eliminate"
              onPress={() => this.props.navigation.navigate('NotesScreen')}/>
          {/* </View> */}
        </KeyboardAvoidingView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
