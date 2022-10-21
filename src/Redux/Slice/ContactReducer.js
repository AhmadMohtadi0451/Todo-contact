import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "ahmad",
    number: "09363690513",
    country: "iran",
    todo: [{ id: 1, title: "buy ticket", status: false }],
  },
  {
    id: 2,
    name: "ali",
    number: "09378279032",
    country: "spain",
    todo: [{ id: 1, title: "buy milk", status: false }],
  },
];
export const ContactSlice = createSlice({
  name: "contacts",

  initialState,

  reducers: {
    deleteContact: (state, action) => {
      const { payload } = action;
      const index = state.findIndex((state) => state.id === payload);
      state.splice(index, 1);
    },
    addContact: (state, action) => {
      const { payload } = action;
      state.push(payload);
    },
    updateContact: (state, action) => {
      const { payload } = action;
      const index = state.findIndex((state) => state.id === payload.id);
      state[index] = payload;
    },
  },
});

export const { deleteContact, addContact, updateContact } =
  ContactSlice.actions;

export default ContactSlice.reducer;
