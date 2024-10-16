import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./animal";

export const store = configureStore({
  reducer: {
    animal: animalReducer,
  },
});
