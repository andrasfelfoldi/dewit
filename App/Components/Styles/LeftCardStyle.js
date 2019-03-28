import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  leftCard: {
    width: Metrics.screenWidth,
    // height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    maxHeight: Metrics.screenHeight / 2 - Metrics.navBarHeight,

    flex: 1,
    flexShrink: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    padding: Metrics.baseMargin + 30,
    paddingLeft: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
  },

})
