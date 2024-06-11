import { TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import React, { useState } from 'react'
import { View } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
const dPoint = () => {
  return (
    <View
      style={{
        width: 14,
        height: 14,
        backgroundColor: appColors.White,
        borderWidth: 3,
        borderRadius: 7,
        borderColor: appColors.primary
      }}
    />
  )
}

const customLabel = (val: string) => {
  return (
    <View style={{ width: 70, marginLeft: 7 }}>
      <TextComponent text={val} font={appFonts.regular} color={appColors.text} size={14} />
    </View>
  )
}

const latestData = [
  {
    value: 17,
    labelComponent: () => customLabel('1/6'),
    customDataPoint: dPoint
  },
  {
    value: 9,
    hideDataPoint: true
  },
  {
    value: 15,
    customDataPoint: dPoint
  },
  {
    value: 19,
    hideDataPoint: true
  },
  {
    value: 10,
    labelComponent: () => customLabel('4/6'),
    customDataPoint: dPoint
  },
  {
    value: 23,
    hideDataPoint: true
  },
  {
    value: 17,
    customDataPoint: dPoint
  },
  {
    value: 27,
    hideDataPoint: true
  },
  {
    value: 21,
    labelComponent: () => customLabel('7/6'),
    customDataPoint: dPoint
  },
  {
    value: 29,
    hideDataPoint: true
  },
  {
    value: 41,
    customDataPoint: dPoint
  },
  {
    value: 47,
    hideDataPoint: true
  },
  {
    value: 23,
    labelComponent: () => customLabel('10/6'),
    customDataPoint: dPoint
  },
  {
    value: 27,
    hideDataPoint: true
  },
  {
    value: 37,
    hideDataPoint: true
  },
  {
    value: 41,
    customDataPoint: dPoint
  },
  {
    value: 10,
    labelComponent: () => customLabel('13/6'),
    customDataPoint: dPoint
  }
  // {
  //   value: 20,
  //   hideDataPoint: true
  // },
  // {
  //   value: 10,
  //   customDataPoint: dPoint
  // }
]

const LineChartComponent = () => {
  const [currentData, setCurrentData] = useState(latestData)

  return (
    <View>
      <View
        style={[
          {
            paddingVertical: 50,
            backgroundColor: appColors.bgPrimary
          }
        ]}
      >
        <LineChart
          isAnimated
          thickness={3}
          color={appColors.primary}
          width={appInfors.sizes.WIDTH - 87}
          maxValue={60}
          noOfSections={3}
          animateOnDataChange
          animationDuration={1000}
          onDataChangeAnimationDuration={300}
          areaChart
          showValuesAsDataPointsText
          // onFocus={(item: any) => {
          //   console.log(item)
          // }}
          // focusEnabled
          // showDataPointOnFocus
          // showStripOnFocus
          // showTextOnFocus
          // focusedDataPointColor={appColors.black}
          // focusedDataPointShape='orange'
          // focusedDataPointRadius={10}
          // dataPointLabelWidth={100}
          yAxisTextStyle={{ color: appColors.black }}
          data={currentData}
          hideDataPoints
          startFillColor={appColors.primary}
          endFillColor={appColors.White}
          startOpacity={0.4}
          endOpacity={0.1}
          spacing={22}
          backgroundColor={appColors.bgPrimary}
          rulesColor={appColors.SilverSand}
          rulesType='dash'
          initialSpacing={10}
          yAxisColor={appColors.black}
          xAxisColor={appColors.black}
          pointerConfig={{
            pointerStripUptoDataPoint: false,
            pointerColor: 'transparent',
            pointerStripWidth: 2,
            pointerStripColor: appColors.SilverSand,
            radius: 6,
            activatePointersOnLongPress: true,
            pointer1Color: appColors.primary,

            pointerLabelComponent: (items: any) => {
              console.log(items[0].value)
              return (
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 30,
                    backgroundColor: appColors.primary,
                    borderRadius: 6,
                    marginLeft: -8
                  }}
                >
                  <TextComponent text={items[0].value} font={appFonts.medium} color={appColors.White} size={13} />
                </View>
              )
            }
          }}
        />
      </View>
    </View>
  )
}
export default LineChartComponent
