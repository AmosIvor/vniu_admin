import { appColors, appFonts } from '@constants'
import { useState } from 'react'
import StepIndicator from 'react-native-step-indicator'

interface Props {
  currentPosition: number
}

const StepIndicatorComponent = (props: Props) => {
  const { currentPosition } = props

  const labels = ['Pending', 'Confirmed', 'In Progress', 'Delivered']

  const customStyles = {
    stepIndicatorSize: 26,
    currentStepIndicatorSize: 34,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: appColors.primary,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: appColors.primary,
    stepStrokeUnFinishedColor: appColors.SilverSand,
    separatorFinishedColor: appColors.primary,
    separatorUnFinishedColor: appColors.SilverSand,
    stepIndicatorFinishedColor: appColors.primary,
    stepIndicatorUnFinishedColor: appColors.White,
    stepIndicatorCurrentColor: appColors.White,
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: appColors.primary,
    stepIndicatorLabelFinishedColor: appColors.White,
    stepIndicatorLabelUnFinishedColor: appColors.SilverSand,
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: appColors.primary,
    labelFontFamily: appFonts.regular
  }

  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      labels={labels}
      stepCount={labels.length}
    />
  )
}
export default StepIndicatorComponent
