import { createAsyncThunk } from '@reduxjs/toolkit';
import { MyKnownError } from '../userInfo/interfaces';
import { ICurrentIDocument, IDocument } from './interface';
import API from '../../api/api';

export const fetchDocument = createAsyncThunk<
    IDocument[],
    undefined,
    { rejectValue: MyKnownError }
>('document/fetchDocument', async () => {
    const response = await API.get(`docs`);

    if (response.status === 500) {
        // return .rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});

export const fetchDocumentById = createAsyncThunk<
    ICurrentIDocument,
    {id: number},
    { rejectValue: MyKnownError }
>('document/fetchDocumentById', async ({id}, thunkApi) => {
    const response = await API.get(`docs/${id}`);

    if (response.status === 500) {
        return thunkApi.rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});