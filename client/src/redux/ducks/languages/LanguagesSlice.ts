import { createSlice } from '@reduxjs/toolkit';
import { ILanguage } from './interfaces';
const initialState: ILanguage[] = [
    {
        id: 1,
        title: "python",
        background: "#306988",
        color: "#FFD43B",
        icon: "python"
    },
    {
        id: 2,
        title: "javascript",
        background: "#FFD43B",
        color: "#000",
        icon: "js"
    },
    {
        id: 3,
        title: "c++",
        background: "#fff",
        color: "#306988",
        icon: "c++"
    }
] 

const LanguagesSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
});

export default LanguagesSlice.reducer;