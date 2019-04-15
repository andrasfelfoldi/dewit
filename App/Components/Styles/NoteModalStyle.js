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
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    height: 200,
    borderRadius: 5,
    overflow: 'hidden',
  },

  header: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth - 2 * Metrics.baseMargin,
    height: 50,
    maxHeight: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexShrink: 1,
  },

  button: {
    marginLeft: 15,
  },

})
