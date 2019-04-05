import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 2,
    maxHeight: Metrics.screenHeight / 2,
    flex: 1,
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },


  arrowTab: {
    ...BaseStyleProps.shadow,
    height: 60,
    width: 60,
    position: 'absolute',
    top: Metrics.screenHeight / 4 - 30,
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

  title: {
    fontSize: 30,
  }
})
