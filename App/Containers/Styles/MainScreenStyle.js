import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    paddingBottom: Metrics.baseMargin,
    padding: Metrics.marginHorizontal,
  },

  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },

  centered: {
    alignItems: 'center'
  },

  card: {
    width: Metrics.width - 2 * Metrics.marginHorizontal,
    height: 200,
    backgroundColor: Colors.fire,
  }
})
