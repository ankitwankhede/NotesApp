import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./reducers/NotesReducer";
export const store = configureStore({
  reducer: {
    noteReducer: noteReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
