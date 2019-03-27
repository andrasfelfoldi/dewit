import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  rightCard: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    flex: 1,
    flexShrink: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: Metrics.screenWidth,
    padding: 30,
  },
})
