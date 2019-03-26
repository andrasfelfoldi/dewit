import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: Metrics.navBarHeight,
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
    margin: Metrics.baseMargin,
    height: 200,
    backgroundColor: Colors.fire,
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: Colors.fire,
    shadowOffset: { height: 0, width: 0 },
  }
})
