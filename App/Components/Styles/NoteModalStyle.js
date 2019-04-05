import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    ...BaseStyleProps.shadow,
    backgroundColor: Colors.green,
    width: Metrics.screenWidth / 2,
    height: 200,
    borderRadius: 10,
  },

})
