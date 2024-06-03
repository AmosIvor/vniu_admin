import { appThemes } from '@constants'
import { createContext, useState } from 'react'

interface AppContextInterface {
  themeTest: string
  setThemeTest: React.Dispatch<React.SetStateAction<string>>
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const initialAppContext: AppContextInterface = {
  themeTest: appThemes.light,
  setThemeTest: () => null,
  isAuthenticated: true, // get from local storage
  setIsAuthenticated: () => null
}

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeTest, setThemeTest] = useState<string>(initialAppContext.themeTest)
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)

  return (
    <AppContext.Provider value={{ themeTest, setThemeTest, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  )
}
