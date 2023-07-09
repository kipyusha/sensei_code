import { createSlice } from "@reduxjs/toolkit";
import { IDocument, IDocumentState } from "./interface";
import { fetchDocument, fetchDocumentById } from "./asyncThunk";

let initialState: IDocumentState = {
    documentList: [],
    loading: false,
    openedDocument: undefined
};

const DocumentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchDocument.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDocument.fulfilled, (state, action) => {
        state.documentList = action.payload;
        state.loading = false;
      })
      .addCase(fetchDocument.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(fetchDocumentById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDocumentById.fulfilled, (state, action) => {
        state.openedDocument = action.payload;
        state.loading = false;
      })
      .addCase(fetchDocumentById.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default DocumentSlice.reducer;
