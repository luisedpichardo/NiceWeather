import { create } from 'zustand'

export const unitType = create(set => ({
  unit: 'imperial',
  units: [
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
  ],
  setUnit: newUnit =>
    set(state => ({
      unit: newUnit,
      units: state.units.map(u => ({
        ...u,
        current: u.value === newUnit,
      })),
    })),
}))
