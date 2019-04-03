import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  rightCard: {
    width: Metrics.screenWidth,
    // height: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    // maxHeight: Metrics.screenHeight / 2 - Metrics.navBarHeight,
    maxHeight: Metrics.screenHeight / 2,

    flex: 1,
    flexShrink: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: Metrics.screenWidth,
    bottom: 0,
    right: Metrics.screenWidth,
    paddingTop: Metrics.baseMargin + 60,
    paddingLeft: Metrics.baseMargin + 30,
    paddingRight: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
  },

  scrollView: {
    flex: 1,
  }

})
