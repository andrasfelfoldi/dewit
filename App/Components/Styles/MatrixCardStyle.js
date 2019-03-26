import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

export default StyleSheet.create({
  card: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight - 10,
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
  },

  title: {
    fontSize: 30,
  }
})
