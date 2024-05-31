'use client'
import { ThemeContext } from '@/Context/ThemeContext'
import React, { useContext, useEffect } from 'react'

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = React.useState(false)
  useEffect(()=>{
    setMounted(true)

  },[])
  if(mounted){

      return <div className={theme}>{children}</div>
    }
}

export default ThemeProvider
