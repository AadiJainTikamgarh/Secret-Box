"use client"
import { SessionProvider } from 'next-auth/react'
import React, { Children } from 'react'

const Provider = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider
