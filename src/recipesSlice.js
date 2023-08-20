import { createSlice } from "@reduxjs/toolkit";

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    loading: false,
  },
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setRecipes, setLoading } = recipesSlice.actions;
export default recipesSlice.reducer;
