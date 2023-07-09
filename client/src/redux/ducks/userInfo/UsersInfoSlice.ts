import { createSlice } from "@reduxjs/toolkit";
import { IState } from "./interfaces";

import {
  fetchLogin,
  fetchRegister,
  uploadAvatar,
  updateLogin,
  // updateLevel,
  updatePassword,
  updateEmail,
} from "./asyncThunk";
import { date_to_string } from "../../../helpers";

const initialState: IState = {
  userInfo: {
    id: "",
    email: "",
    login: "",
    password: "",
    isAuthorize: false,
    date_of_register: "",
    subscribers_count: 0,
    subscriptions_count: 0,
    last_seen: "",
    about: "",
    is_admin: false,
    tasks_completed: 0,
    last_lang: "",
    rank: ""
  },
  isLoading: false,
  errorMessage: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    zeroingError: (state) => {
      state.errorMessage = undefined;
    },
    logOut: (state) => {
      
      state.userInfo.id = "";
      state.userInfo.email = "";
      state.userInfo.login = "";
  
      state.userInfo.isAuthorize = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // REGISTER
      .addCase(fetchRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.userInfo.id = action.payload.id;
        state.userInfo.email = action.payload.email;
        state.userInfo.login = action.payload.login;
        state.userInfo.password = action.payload.password;
        state.userInfo.subscribers_count = action.payload.subscribers_count;
        state.userInfo.subscriptions_count = action.payload.subscriptions_count;
        state.userInfo.date_of_register = date_to_string(new Date(action.payload.date_of_register));
        state.userInfo.last_seen = date_to_string(new Date(action.payload.last_seen));
        state.userInfo.about = action.payload.about;
        state.userInfo.is_admin = action.payload.is_admin;
        state.userInfo.rank = action.payload.rank;        
        state.userInfo.last_lang = action.payload.last_lang;   

        state.userInfo.isAuthorize = true;
        state.errorMessage = undefined;
        state.isLoading = false;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })

      // LOGIN
      .addCase(fetchLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload)
        state.userInfo.id = action.payload.id;
        state.userInfo.email = action.payload.email;
        state.userInfo.login = action.payload.login;
        state.userInfo.password = action.payload.password;
        state.userInfo.subscribers_count = action.payload.subscribers_count;
        state.userInfo.subscriptions_count = action.payload.subscriptions_count;
        state.userInfo.date_of_register = date_to_string(new Date(action.payload.date_of_register));
        state.userInfo.last_seen = date_to_string(new Date(action.payload.last_seen));
        state.userInfo.about = action.payload.about;
        state.userInfo.is_admin = action.payload.is_admin;        
        state.userInfo.rank = action.payload.rank;        
        state.userInfo.last_lang = action.payload.last_lang;        

        state.userInfo.isAuthorize = true;
        state.errorMessage = undefined;
        state.isLoading = false;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })

      // UPLOAD AVATAR
      .addCase(uploadAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(uploadAvatar.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // Update login

      .addCase(updateLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLogin.fulfilled, (state, action) => {
        state.userInfo.login = action.payload.login;
        state.isLoading = false;
      })
      .addCase(updateLogin.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // UPDATE LEVEL
      // .addCase(updateLevel.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(updateLevel.fulfilled, (state, action) => {

      //   state.isLoading = false;
      // })
      // .addCase(updateLevel.rejected, (state, action) => {
      //   state.errorMessage = action.payload?.message;
      //   state.isLoading = false;
      // })

      // Update email
      .addCase(updateEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateEmail.fulfilled, (state, action) => {
        state.userInfo.email = action.payload.email;
        state.isLoading = false;
      })
      .addCase(updateEmail.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      })
      // Update password
      .addCase(updatePassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.userInfo.password = action.payload.password;
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.errorMessage = action.payload?.message;
        state.isLoading = false;
      });
  },
});

export const { zeroingError, logOut } = userSlice.actions;

export default userSlice.reducer;
