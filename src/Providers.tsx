import React from 'react'
import { ModalProvider } from '@pancakeswap-libs/uikit'
import { ThemeContextProvider } from 'contexts/ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ModalProvider>{children}</ModalProvider>
    </ThemeContextProvider>
  )
}

export default Providers
