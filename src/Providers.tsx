import { ModalProvider } from '@pancakeswap-libs/uikit'
import { ThemeContextProvider } from 'contexts/ThemeContext'
import React from 'react'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeContextProvider>
  )
}

export default Providers
