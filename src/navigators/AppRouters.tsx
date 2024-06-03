import { AppContext } from '@contexts'
import { AuthNavigator, MainNavigator } from '@navigators'
import SplashScreen from '@screens/splashs/SplashScreen'
import { useContext, useState } from 'react'
const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(false)
  const { isAuthenticated } = useContext(AppContext)
  return <>{isShowSplash ? <SplashScreen /> : isAuthenticated ? <MainNavigator /> : <AuthNavigator />}</>
}
export default AppRouters
