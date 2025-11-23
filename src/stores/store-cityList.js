import { create } from 'zustand'

export const cityList = create(set => ({
  cities: [
    { city: 'el paso', country: 'usa', fromList: true },
    { city: 'atlanta', country: 'usa', fromList: true },
    { city: 'miami', country: 'usa', fromList: true },
  ],
  addCity: city =>
    set(state => ({
      cities: [...state.cities, city],
    })),
  removeCity: cityName =>
    set(state => ({
      cities: state.cities.filter(c => c.city !== cityName.toLowerCase()),
    })),
}))
