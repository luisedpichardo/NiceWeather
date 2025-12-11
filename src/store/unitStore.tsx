import { create } from 'zustand';

export type Unit = {
  textUI: string;
  value: string;
  current: boolean;
};

export const unitListStore = create(set => ({
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
  setUnit: (value: string) =>
    set(state => ({
      unit: value,
      units: state.units.map((u: Unit) => ({
        ...u,
        current: u.value === value,
      })),
    })),
}));
