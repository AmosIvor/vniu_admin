import { ProductItem } from '@appTypes/product.type'
import { DATAS } from '@assets'
import { RowComponent, SectionComponent, SpaceComponent } from '@components'
import { appColors, appInfors } from '@constants'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react-native'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'

const BUTTON_SIZE = 24
const PADDING_HORIZONTAL = 16

const CarouselComponent = () => {
  const [productItemData, setProductItemData] = useState<ProductItem>()
  const [activeImage, setActiveImage] = useState<string>('')
  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const widthCalculate = appInfors.sizes.WIDTH * 0.8

  useEffect(() => {
    setProductItemData(DATAS.productItemList[0])
  }, [])

  const imageList: string[] = useMemo(() => {
    if (productItemData) {
      return productItemData.productImages.map((productImage) => productImage.productImageUrl)
    }

    return []
  }, [productItemData])

  useEffect(() => {
    if (productItemData) {
      setActiveImage(imageList[0])
    }
  }, [productItemData, imageList])

  const currentIndexActiveImage = useMemo(() => {
    return imageList.indexOf(activeImage)
  }, [activeImage, imageList])

  const next = useCallback(() => {
    const currentIndexImage = imageList.indexOf(activeImage)
    console.log(currentIndexImage)
    if (currentIndexImage === imageList.length - 1) {
      setActiveImage(imageList[0])
    } else {
      setActiveImage(imageList[currentIndexImage + 1])
    }
  }, [activeImage, imageList])

  const prev = useCallback(() => {
    const currentIndexImage = imageList.indexOf(activeImage)
    console.log(currentIndexImage)
    if (currentIndexImage === 0) {
      setActiveImage(imageList[imageList.length - 1])
    } else {
      setActiveImage(imageList[currentIndexImage - 1])
    }
  }, [activeImage, imageList])

  const handleCarousel = (index: number) => {
    setActiveImage(imageList[index])
  }

  return (
    <SectionComponent>
      <RowComponent justify='center'>
        <Image
          source={{
            uri: `${
              activeImage.length < 1
                ? 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ='
                : activeImage
            }`
          }}
          style={{ width: widthCalculate, height: widthCalculate, resizeMode: 'cover' }}
        />
      </RowComponent>

      <SpaceComponent height={16} />

      <RowComponent justify='space-between'>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={prev}
          style={{ marginLeft: appInfors.sizes.WIDTH * 0.2 - PADDING_HORIZONTAL - 2 }}
        >
          <ArrowLeft2 size={BUTTON_SIZE} color={appColors.text} />
        </TouchableOpacity>
        <RowComponent>
          {Array(imageList.length)
            .fill(0)
            .map((_, index) => (
              <>
                <TouchableOpacity
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: 100,
                    borderWidth: 1,
                    marginHorizontal: 10,
                    borderColor: currentIndexActiveImage === index ? appColors.primary : appColors.Black,
                    backgroundColor: currentIndexActiveImage === index ? appColors.primary : appColors.White
                  }}
                  key={`carousel ${index}`}
                  onPress={() => handleCarousel(index)}
                  activeOpacity={0.8}
                />
              </>
            ))}
        </RowComponent>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={next}
          style={{ marginRight: appInfors.sizes.WIDTH * 0.2 - PADDING_HORIZONTAL + 2 }}
        >
          <ArrowRight2 size={BUTTON_SIZE} color={appColors.text} />
        </TouchableOpacity>
      </RowComponent>
    </SectionComponent>
  )
}
export default CarouselComponent
