// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { isTokenExpired } from "../utils/tokenUtils";

const rawUser = localStorage.getItem("user");
let initialState = null;

if (rawUser) {
  const parsedUser = JSON.parse(rawUser);
  if (!isTokenExpired(parsedUser.token)) {
    initialState = parsedUser;
  } else {
    localStorage.removeItem("user"); // Token expired, clear localStorage
  }
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
    removeUser: () => {
      localStorage.removeItem("user");
      return null;
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
