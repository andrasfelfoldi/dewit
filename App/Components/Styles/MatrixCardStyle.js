import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 2,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftTab: {
    ...BaseStyleProps.shadow,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    width: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: Colors.green,
  },

  rightTab: {
    ...BaseStyleProps.shadow,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    width: 30,
    position: 'absolute',
    top: 0,
    left: Metrics.screenWidth,
    backgroundColor: Colors.green,
  },

  leftTitleBar: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  rightTitleBar: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth,
    height: 30,
    position: 'absolute',
    top: 0,
    right: -Metrics.screenWidth,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
  }
})
