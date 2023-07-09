import { createSlice } from '@reduxjs/toolkit';
// import { fetchTasks } from './asyncThunk';
import { IModule } from './interfaces';
import { DATA } from './mockdata';

let initialState: IModule[] = DATA;

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default tasksSlice.reducer;