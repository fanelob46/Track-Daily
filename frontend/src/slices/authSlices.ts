import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for user information
interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  isAdmin: boolean;
  token?: string; // Include token if applicable
}

// Define the initial state type
interface AuthState {
  userInfo: UserInfo | null;
}


const initialState: AuthState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
