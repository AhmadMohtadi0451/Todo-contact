import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "../Slice/ContactReducer";

export const Store = configureStore({
  reducer: {
    contacts: ContactSlice,
  },
});
