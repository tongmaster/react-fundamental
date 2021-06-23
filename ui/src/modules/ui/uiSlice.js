import { createSlice, createAction } from "@reduxjs/toolkit";
export const toggleDarkModeRequest = createAction("toggleDarkMode");
export const setDarkModeRequest = createAction(
  "setDarkModeRequest",
  function (darkMode) {
    return {
      payload: { darkMode },
    };
  }
);
const uiSlice = createSlice({
  name: "uiReducer",
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode(state, action) {
      return { ...state, darkMode: !state.darkMode };
    },
    setDarkMode(state, action) {
      return { ...state, darkMode: action.payload.darkMode };
    },
  },
});

export const { toggleDarkMode, setDarkMode } = uiSlice.actions;

export default uiSlice.reducer;
