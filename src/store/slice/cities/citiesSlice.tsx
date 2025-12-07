import { createSlice } from '@reduxjs/toolkit';

type City = {
  city: string;
  country: string;
};

const initialState: City[] = [];

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    onAddCity: (state, action) => {
      return [
        ...state,
        { city: action.payload.city, country: action.payload.country },
      ];
    },
    onRemoveCity: (state, action) => {
      return state.filter((city: any) => city.city !== action.payload.city);
    },
  },
});

export const { onAddCity, onRemoveCity } = citiesSlice.actions;
export default citiesSlice.reducer;
