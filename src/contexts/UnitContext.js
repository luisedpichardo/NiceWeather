/** NOT IN USE CURRENTLY */
import { createContext, useContext, useState } from 'react';

const UnitContext = createContext();
const UnitUpdateContext = createContext();
const UnitsContext = createContext();
const UnistUpdateContext = createContext();

function useUnit() {
  return useContext(UnitContext);
}

function useUnitUpdate() {
  return useContext(UnitUpdateContext);
}

function useUnits() {
  return useContext(UnitsContext);
}

function useUnitsUpdate() {
  return useContext(UnistUpdateContext);
}

function UnitProvider({ children }) {
  const [unit, setUnit] = useState('imperial');
  const [units, setUnits] = useState([
    {
      textUI: 'Fahrenheit (°F)',
      value: 'imperial',
      current: true,
    },
    {
      textUI: 'Celsius (°C)',
      value: 'metric',
      current: false,
    },
    {
      textUI: 'Kelvin (°K)',
      value: 'standard',
      current: false,
    },
  ]);

  return (
    <UnitContext.Provider value={unit}>
      <UnitsContext.Provider value={units}>
        <UnitUpdateContext.Provider value={setUnit}>
          <UnistUpdateContext.Provider value={setUnits}>
            {children}
          </UnistUpdateContext.Provider>
        </UnitUpdateContext.Provider>
      </UnitsContext.Provider>
    </UnitContext.Provider>
  );
}
