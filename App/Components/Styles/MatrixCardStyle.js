import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  card: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightGreen,
  },

  rightTab: {
    ...BaseStyleProps.shadow,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.green,
  },

  titleBar: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth - 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: Colors.green,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
  }
})
