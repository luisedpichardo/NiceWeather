export const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
}

export const CityReducer = (cities, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [action.payload.city, ...cities]
    case ACTIONS.REMOVE:
      return cities.filter(elem => elem.city !== action.payload.city)
    default:
      return cities
  }
}
