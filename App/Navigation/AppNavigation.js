import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import EditNoteScreen from '../Containers/EditNoteScreen'
import NotesScreen from '../Containers/NotesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MainScreen: { screen: MainScreen },
  EditNoteScreen: { screen: EditNoteScreen },
  NotesScreen: { screen: NotesScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
