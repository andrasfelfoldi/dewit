import React, { Component } from 'react'
import { ScrollView, Image, View, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'
import NoteActionCreators from "../Redux/NoteRedux";

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/NotesScreenStyle'
import ToDoItem from '../Components/ToDoItem';
import NewItemButton from '../Components/NewItemButton';

class NotesScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          {this.props.dos.map((doNote, i) => 
            <ToDoItem title={doNote.title} content={doNote.content} onPress={() => this.props.navigation.navigate('EditNoteScreen')} key={i} />)}
        </ScrollView>
        <NewItemButton onPress={() => this.props.saveDo()}/>
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
    saveDo: () => dispatch(NoteActionCreators.saveDo({title: 'asd', content: 'kek'}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen)
