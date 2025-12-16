import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Unit = {
  textUI: string;
  value: string;
  current: boolean;
};

export const unitListStore = create()(
  persist(
    (set, get) => ({
      unit: 'imperial',
      units: [
        {
          textUI: 'Fahrenheit (°F)',
          value: 'imperial',
        },
        {
          textUI: 'Celsius (°C)',
          value: 'metric',
        },
        {
          textUI: 'Kelvin (°K)',
          value: 'standard',
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
    }),
    {
      name: 'unit-for-weather',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
