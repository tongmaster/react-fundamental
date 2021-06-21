export const TOGGLE_DARK_MODE = "app/ui/TOGGLE_DARK_MODE";
export const SET_DARK_MODE = "app/ui/SET_DARK_MODE";
export const SET_FLASH_MESSAGE = "app/ui/SET_FLASH_MESSAGE";
export const CLEAR_FLASH_MESSAGE = "app/ui/CLEAR_FLASH_MESSAGE";

export function toggleDarkMode() {
  return {
    type: TOGGLE_DARK_MODE,
  };
}

export function setDarkMode(darkMode) {
  return {
    type: SET_DARK_MODE,
    payload: {
      darkMode,
    },
  };
}
export function setFlashMessage(message) {
  return {
    type: SET_FLASH_MESSAGE,
    payload: { message },
  };
}
export function clearFlashMessage(message) {
  return {
    type: CLEAR_FLASH_MESSAGE,
  };
}
