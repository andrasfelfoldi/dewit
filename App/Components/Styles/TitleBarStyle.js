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
    alignItems: 'center',
    justifyContent: 'center',
  }
})
