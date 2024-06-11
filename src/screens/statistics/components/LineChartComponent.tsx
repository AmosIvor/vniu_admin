import { TextComponent } from '@components'
import { appColors, appFonts, appInfors } from '@constants'
import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'
import { globalStyles } from 'src/styles/globalStyles'
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
    value: 100,
    labelComponent: () => customLabel('22 Nov'),
    customDataPoint: dPoint
  },
  {
    value: 120,
    hideDataPoint: true
  },
  {
    value: 210,
    customDataPoint: dPoint
  },
  {
    value: 250,
    hideDataPoint: true
  },
  {
    value: 320,
    labelComponent: () => customLabel('24 Nov'),
    customDataPoint: dPoint
  },
  {
    value: 310,
    hideDataPoint: true
  },
  {
    value: 270,
    customDataPoint: dPoint
  },
  {
    value: 240,
    hideDataPoint: true
  },
  {
    value: 130,
    labelComponent: () => customLabel('26 Nov'),
    customDataPoint: dPoint
  },
  {
    value: 120,
    hideDataPoint: true
  },
  {
    value: 100,
    customDataPoint: dPoint
  },
  {
    value: 210,
    hideDataPoint: true
  },
  {
    value: 270,
    labelComponent: () => customLabel('28 Nov'),
    customDataPoint: dPoint
  },
  {
    value: 240,
    hideDataPoint: true
  },
  {
    value: 120,
    hideDataPoint: true
  },
  {
    value: 100,
    customDataPoint: dPoint
  },
  {
    value: 210,
    labelComponent: () => customLabel('30 Nov'),
    customDataPoint: dPoint
  },
  {
    value: 20,
    hideDataPoint: true
  },
  {
    value: 100,
    customDataPoint: dPoint
  }
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
          maxValue={600}
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
