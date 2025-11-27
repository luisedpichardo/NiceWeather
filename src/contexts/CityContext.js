import { createContext, useContext, useReducer } from 'react'
import { CityReducer } from '../reducers/CityReducer.js'

export const CitiesContext = createContext()
const CitiesUpdateContext = createContext()

export function useCities() {
  return useContext(CitiesContext)
}

export function useCitiesUpdate() {
  return useContext(CitiesUpdateContext)
}

export function CitiesProvider({ children }) {
  const [cities, dispatchCities] = useReducer(CityReducer, [])

  return (
    <CitiesContext.Provider value={cities}>
      <CitiesUpdateContext.Provider value={dispatchCities}>
        {children}
      </CitiesUpdateContext.Provider>
    </CitiesContext.Provider>
  )
}
