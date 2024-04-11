'use client'

import { PropsWithChildren, useEffect, useState, createContext } from "react"

export const TestProvider = createContext({});

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  const [_, setTest] = useState(0);

  useEffect(() => {
    setTest(1)
  }, [])
  // New value on rerender causes CLS
  const value = {}

  return <TestProvider.Provider value={value}>{children}</TestProvider.Provider>
}