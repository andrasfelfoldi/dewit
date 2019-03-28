import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    marginTop: Metrics.navBarHeight,
    // paddingBottom: Metrics.navBarHeight,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - 2 * Metrics.navBarHeight,
    maxHeight: Metrics.screenHeight - 2 * Metrics.navBarHeight,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: Colors.panther
  },

  row: {
    width: Metrics.screenWidth,
    // height: Metrics.screenHeight,
    maxHeight: (Metrics.screenHeight - 2 * Metrics.navBarHeight) / 2,
    flex: 1,
    flexShrink: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    backgroundColor: Colors.steel
  },

})
