import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 2,
    // height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    maxHeight: Metrics.screenHeight / 2,
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  leftTab: {
    ...BaseStyleProps.shadow,
    // height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    // maxHeight: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    // maxHeight: Metrics.screenHeight / 2,
    height: 60,
    width: 30,
    position: 'absolute',
    top: Metrics.screenHeight / 4 - 30,
    // right: 0,
    // bottom: 0,
    // left: Metrics.screenWidth - 30,
    left: Metrics.screenWidth,
    backgroundColor: Colors.green,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },

  arrowTab: {
    ...BaseStyleProps.shadow,
    // height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    // maxHeight: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    // maxHeight: Metrics.screenHeight / 2,
    height: 60,
    width: 60,
    position: 'absolute',
    // top: 0,
    top: Metrics.screenHeight / 4 - 30,
    // bottom: 0,
    // right: 2 * Metrics.screenWidth - 30,
    left: Metrics.screenWidth - 30,
    backgroundColor: Colors.green,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  secondaryColorCircle: {
    height: 60,
    width: 60,
    position: 'absolute',
    // top: 0,
    top: 0,
    left: -60,
    backgroundColor: Colors.green,
    borderRadius: 50,
  },

  arrowIcon: {
    position: 'relative',
    top: 0,
    right: 14,
  },

  leftDecor: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth,
    position: 'absolute',
    left: 0,
  },

  rightDecor: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth,
    position: 'absolute',
    left: Metrics.screenWidth,
  },

  title: {
    fontSize: 30,
  }
})
