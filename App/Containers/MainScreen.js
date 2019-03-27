import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MainScreenStyle'
import MatrixCard from '../Components/MatrixCard';

class MainScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <MatrixCard leftTitle="Do" rightTitle="Schedule"
            onPress={() => this.props.navigation.navigate('NotesScreen')}/>
          {/* <MatrixCard title="Schedule"
            backgroundColor={Colors.frost}
            onPress={() => this.props.navigation.navigate('NotesScreen')}/> */}
        </View>
        <View style={styles.row}>
          <MatrixCard leftTitle="Delegate" rightTitle="Eliminate"
            onPress={() => this.props.navigation.navigate('NotesScreen')}/>
          {/* <MatrixCard title="Eliminate"
            backgroundColor={Colors.panther}
            onPress={() => this.props.navigation.navigate('NotesScreen')}/> */}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
