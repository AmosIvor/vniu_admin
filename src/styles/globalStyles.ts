import { StatusBar, StyleSheet } from 'react-native'
import { appColors } from 'src/constants/appColors'
import { appFonts } from 'src/constants/appFonts'

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.bgPrimary,
    paddingTop: StatusBar.currentHeight
  },

  section: {
    paddingHorizontal: 16,
    paddingBottom: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8
  },

  shadowCustom: {
    shadowColor: 'rgba(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.5,
    elevation: 8
  },

  tag: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100
  },

  text: {
    fontSize: 14,
    fontFamily: appFonts.regular,
    color: appColors.text
  },

  inputContainer: {
    backgroundColor: appColors.White,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    paddingVertical: 10
  },

  button: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.primary,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: 'row'
  },

  card: {
    borderRadius: 10,
    backgroundColor: appColors.White,
    // padding: 12,
    marginHorizontal: 8,
    marginVertical: 8
  }
})
