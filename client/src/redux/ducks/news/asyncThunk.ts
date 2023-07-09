import { createAsyncThunk } from '@reduxjs/toolkit';
import { MyKnownError } from '../userInfo/interfaces';
import { ICurrentNews, INews } from './interface';
import API from '../../api/api';

export const fetchNews = createAsyncThunk<
    INews[],
    undefined,
    { rejectValue: MyKnownError }
>('news/fetchNews', async () => {
    const response = await API.get(`news`);

    if (response.status === 500) {
        // return .rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});

export const fetchNewsById = createAsyncThunk<
    ICurrentNews,
    {id: number},
    { rejectValue: MyKnownError }
>('news/fetchNewsById', async ({id}, thunkApi) => {
    const response = await API.get(`news/${id}`);

    if (response.status === 500) {
        return thunkApi.rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});