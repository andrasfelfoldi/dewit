import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  circle: {
    position: 'absolute',
    bottom: 30,
    left: Metrics.screenWidth / 2 - 25,
    width: 50,
    height: 50,
    backgroundColor: Colors.frost,
    borderRadius: 50,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: Colors.fire,
    shadowOffset: { height: 0, width: 0 },
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 30
  }
})
