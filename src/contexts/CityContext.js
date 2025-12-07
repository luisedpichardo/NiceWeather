/** NOT IN USE CURRENTLY */
import { createContext, useContext, useReducer } from 'react';
// Reducers
import { CityReducer } from '../reducers/CityReducer.js';

const CitiesContext = createContext();
const CitiesUpdateContext = createContext();

function useCities() {
  return useContext(CitiesContext);
}

function useCitiesUpdate() {
  return useContext(CitiesUpdateContext);
}

function CitiesProvider({ children }) {
  const [cities, dispatchCities] = useReducer(CityReducer, []);

  return (
    <CitiesContext.Provider value={cities}>
      <CitiesUpdateContext.Provider value={dispatchCities}>
        {children}
      </CitiesUpdateContext.Provider>
    </CitiesContext.Provider>
  );
}
