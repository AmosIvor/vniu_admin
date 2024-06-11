import { appColors } from '@constants'
import { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import { PieChart } from 'react-native-gifted-charts'

const pieData = [
  {
    value: 47,
    color: '#009FFF',
    gradientCenterColor: '#006DFF',
    focused: true,
    text: 'Polo'
  },
  { value: 34, color: '#93FCF8', gradientCenterColor: '#3BE9DE', focused: false, text: 'Shorts' },
  { value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3', focused: false, text: 'Hoodies' },
  { value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97', focused: false, text: 'Jeans' }
]

const PieChartComponent = () => {
  const [selectedData, setSelectedData] = useState(pieData)

  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10
        }}
      />
    )
  }

  const renderLegendComponent = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 10
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20
            }}
          >
            {renderDot('#006DFF')}
            <Text style={{ color: 'white' }}>Polo: 47%</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
            {renderDot('#8F80F3')}
            <Text style={{ color: 'white' }}>Hoodies: 16%</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 120,
              marginRight: 20
            }}
          >
            {renderDot('#3BE9DE')}
            <Text style={{ color: 'white' }}>Shorts: 34%</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
            {renderDot('#FF7F97')}
            <Text style={{ color: 'white' }}>Jeans: 3%</Text>
          </View>
        </View>
      </>
    )
  }

  const renderCenterLabel = useCallback(() => {
    const focusedItem = selectedData.find((item) => item.focused)
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{`${focusedItem?.value}%`}</Text>
        <Text style={{ fontSize: 14, color: 'white' }}>{focusedItem?.text}</Text>
      </View>
    )
  }, [selectedData])

  return (
    <View
      style={{
        backgroundColor: appColors.bgPrimary,
        flex: 1
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: '#232B5D'
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Top Revenue Product</Text>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <PieChart
            data={pieData}
            donut
            showGradient
            // sectionAutoFocus
            // showValuesAsLabels
            focusOnPress
            onPress={(item: any, index: any) => {
              setSelectedData((prev) =>
                prev.map((data, i) => ({
                  ...data,
                  focused: i == index
                }))
              )
            }}
            radius={120}
            innerRadius={90}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={renderCenterLabel}
          />
        </View>
        {renderLegendComponent()}
      </View>
    </View>
  )
}

export default PieChartComponent
