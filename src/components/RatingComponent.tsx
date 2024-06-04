import { Rating } from '@kolking/react-native-rating'
import { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

interface Props {
  value?: number
  onChange?: (val: number) => void
}

const RatingComponent = (props: Props) => {
  const { value, onChange } = props

  const [rating, setRating] = useState(value ?? 0)

  useEffect(() => {
    if (value) {
      console.log('value: ', value)
      setRating(value)
    }
  }, [setRating, value])

  const handleChange = useCallback(
    (valueFromRating: number) => {
      setRating(valueFromRating)
      onChange && onChange(valueFromRating)
      return
    },
    [rating]
  )

  return (
    <View style={{ flex: 1 }}>
      <Rating size={40} rating={rating} onChange={handleChange} touchColor={'orange'} />
    </View>
  )
}
export default RatingComponent
