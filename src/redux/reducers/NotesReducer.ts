import Note from "../../component/Note/Note";
import { ADD_NOTE, DELETE_NOTE } from "../actions/NotesActions";

type Note = {
  id: number;
  text: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
  created_time: string;
  completed_time: string;
};

type initialState = {
  Notes: Note[];
};

export function saveNote(data: Note) {
  return {
    type: ADD_NOTE,
    payload: data,
  };
}

export function NotesReducers(state: initialState, action:any) {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state.Notes, action.payload };
    case DELETE_NOTE:
      return;

    default: return state;
  }
}
