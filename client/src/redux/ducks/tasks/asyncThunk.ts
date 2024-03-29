import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { IModule } from './interfaces';

interface IGetLeader {
    table: string
}

export interface MyKnownError {
    message: string;
}

export const fetchTasks = createAsyncThunk<
    IModule[],
    IGetLeader,
    { rejectValue: MyKnownError }
>('planets/fetchLeaders', async (tableInfo, thunkApi) => {
    const response = await axios.get(`http://localhost:8000/api/tasks/:${tableInfo.table}`);

    if (response.status === 500) {
        return thunkApi.rejectWithValue((await response.data) as MyKnownError);
    } else {
        return await response.data;
    }
});