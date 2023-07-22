import { createSlice } from "@reduxjs/toolkit";

export type NoteType = {
  id: number;
  text: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
  created_time: string;
  completed_time: string;
};

type NoteState = {
  Notes: NoteType[];
};

const initialState: NoteState = {
  Notes: [],
};

export const noteSlice = createSlice({
  name: "noteReducer",
  initialState,
  reducers: {
    ADD_NOTE: (state, action) => {
      state.Notes.push(action.payload);
    },
    DELETE_NOTE: (state, action) => {
      state.Notes = state.Notes.filter((note) => note.id != action.payload.id);
    },
  },
});
export const { ADD_NOTE, DELETE_NOTE } = noteSlice.actions;
export default noteSlice.reducer;
