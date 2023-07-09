import { createSlice } from "@reduxjs/toolkit";
import { INews, INewsState } from "./interface";
import { fetchNews, fetchNewsById } from "./asyncThunk";

let initialState: INewsState = {
    newsList: [],
    loading: false,
    openedNews: undefined
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.newsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(fetchNewsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewsById.fulfilled, (state, action) => {
        state.openedNews = action.payload;
        state.loading = false;
      })
      .addCase(fetchNewsById.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default NewsSlice.reducer;
