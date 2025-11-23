import { create } from 'zustand'

export const cityList = create(set => ({
  cities: [
    { city: 'el paso', country: 'usa' },
    { city: 'atlanta', country: 'usa' },
    { city: 'miami', country: 'usa' },
  ],
  addCity: city =>
    set(state => ({
      cities: [...state.cities, city],
    })),
}))
