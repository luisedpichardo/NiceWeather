import { createContext, useContext, useState } from 'react'

export const CitiesContext = createContext()
const CitiesUpdateContext = createContext()

export function useCities() {
  return useContext(CitiesContext)
}

export function useCitiesUpdate() {
    return useContext(CitiesUpdateContext)
}

export function CitiesProvider({ children }) {
  const [cities, setCities] = useState([])

  console.log(cities)

  return (
    <CitiesContext.Provider value={cities}>
      <CitiesUpdateContext.Provider value={setCities}>
            {children}
      </CitiesUpdateContext.Provider>
    </CitiesContext.Provider>
  )
}
