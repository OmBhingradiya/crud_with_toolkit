import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Amanda",
    email: "amanda@gmail.com",
  },
  {
    id: "2",
    name: "Nandu",
    email: "nandu@gmail.com",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      //   const { id, name, email } = action.payload;
      debugger;
      const existingUser = state.find((user) => user.id === action.payload.id);
      if (existingUser) {
        existingUser.name = action.payload.name;
        existingUser.email = action.payload.email;
      }
    },
  },
});
export const { addUser, editUser } = userSlice.actions;
export default userSlice.reducer;
