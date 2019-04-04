import { StyleSheet } from 'react-native'
import { Metrics, Colors, BaseStyleProps } from '../../Themes'

export default StyleSheet.create({
  titleBar: {
    ...BaseStyleProps.shadow,
    width: Metrics.screenWidth,
    height: 60,
    position: 'absolute',
    top: 0,
    left: 0,
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
