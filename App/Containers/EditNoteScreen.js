import React, { Component } from 'react'
import { ScrollView, View, TextInput, Image, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/EditNoteScreenStyle'

class EditNoteScreen extends Component {
  render () {
    return (

      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <KeyboardAvoidingView behavior='position' style={styles.card}>
            <TextInput style={styles.title}>Title</TextInput>
            <TextInput style={styles.textContent} multiline={true}>Lorem ipsum</TextInput>
          </KeyboardAvoidingView>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditNoteScreen)
