import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/api";

import {
  IUploadAvatar,
  IUpUserLogin,
  IUser,
  IUserLogin,
  IUserRegister,
  IUpUserLevel,
  IUpUserMail,
  IUpUserPassword,
  MyKnownError,
//   IStats,
//   IUserLanguages,
//   IUserLanguagesProgress,
//   IUserStats,
} from "./interfaces";

export const fetchRegister = createAsyncThunk<
  IUser,
  IUserRegister,
  { rejectValue: MyKnownError }
>("user/fetchRegister", async (user, thunkApi) => {
  const res = await API.post("users", {
    email: user.email,
    login: user.login,
    password: user.password,
  });

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const fetchLogin = createAsyncThunk<
  IUser,
  IUserLogin,
  { rejectValue: MyKnownError }
>("user/fetchLogin", async (info, thunkApi) => {
  const res = await API.post(`users/login`, { info });
  console.log(res)
  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const uploadAvatar = createAsyncThunk<
  IUser,
  IUploadAvatar,
  { rejectValue: MyKnownError }
>("user/uploadAvatar", async (info, thunkApi) => {
  let data = new FormData();
  data.append("file", info.img);
  data.append("userId", info.id);

  const res = await API.post(`users/upload`, data);

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const updateLogin = createAsyncThunk<
  IUser,
  IUpUserLogin,
  { rejectValue: MyKnownError }
>("user/updateLogin", async (info, thunkApi) => {
  const res = await API.put(`users/update_login`, {
    userId: info.id,
    login: info.login,
  });

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const updateLevel = createAsyncThunk<
  IUser,
  IUpUserLevel,
  { rejectValue: MyKnownError }
>("users/updateLevel", async (info, thunkApi) => {
  const res = await API.put(`users/update_level`, {
    userId: info.id,
    level: info.level,
  });

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const updateEmail = createAsyncThunk<
  IUser,
  IUpUserMail,
  { rejectValue: MyKnownError }
>("users/updateEmail", async (info, thunkApi) => {
  const res = await API.put(`users/update_email`, {
    userId: info.id,
    email: info.email,
  });

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});

export const updatePassword = createAsyncThunk<
  IUser,
  IUpUserPassword,
  { rejectValue: MyKnownError }
>("users/updatePassword", async (info, thunkApi) => {
  const res = await API.put(`users/update_password`, {
    userId: info.id,
    password: info.password,
  });

  if (res.status === 500) {
    return thunkApi.rejectWithValue((await res.data) as MyKnownError);
  } else {
    return await res.data;
  }
});
