/** NOT IN USE CURRENTLY */ /** only by cityContext which is not in use as well */
const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
};

export const CityReducer = (cities, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...cities, action.payload.city];
    case ACTIONS.REMOVE:
      return cities.filter(elem => elem.city !== action.payload.city);
    default:
      return cities;
  }
};
