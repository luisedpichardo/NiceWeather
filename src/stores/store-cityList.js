import { create } from 'zustand'

export const cityList = create(set => ({
  cities: [],
  addCity: city =>
    set(state => ({
      cities: [...state.cities, city],
    })),
  removeCity: cityName =>
    set(state => ({
      cities: state.cities.filter(c => c.city !== cityName),
    })),
}))
