import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const listAllCharacters = createAsyncThunk(
    "characters/listAllCharacter",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/characters', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const listRecentCharacters = createAsyncThunk(
    "characters/listRecentCharacter",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/characters/recent', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const listOneCharacter = createAsyncThunk(
    "characters/listOneCharacter",
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/characters/${id}`, {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    characters: [],
    isLoading: false,
    error: null,
};

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(listAllCharacters.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(listAllCharacters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.characters = action.payload;
        })
        .addCase(listAllCharacters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })


        .addCase(listRecentCharacters.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(listRecentCharacters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.characters = action.payload;
        })
        .addCase(listRecentCharacters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })


        .addCase(listOneCharacter.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(listOneCharacter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.characters = action.payload;
        })
        .addCase(listOneCharacter.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export { listAllCharacters, listRecentCharacters, listOneCharacter };

export default charactersSlice.reducer;