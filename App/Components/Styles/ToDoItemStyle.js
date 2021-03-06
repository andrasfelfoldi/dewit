import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  card: {
    width: Metrics.width - 2 * Metrics.marginHorizontal,
    margin: Metrics.baseMargin,
    backgroundColor: Colors.fire,
    borderRadius: 10,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: Colors.fire,
    shadowOffset: { height: 0, width: 0 },
    padding: 10,
  },

  title: {
    fontSize: 30,
  },

  textContent: {
    fontSize: 15,
  },

})
