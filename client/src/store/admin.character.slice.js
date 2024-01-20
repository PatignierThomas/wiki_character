import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const modifyCharacters = createAsyncThunk(
    "modify/modifyCharacters",
    async ({id, newCharacterInfo}) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/character/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCharacterInfo),
    });
        const data = await response.json();
        return data;
    }
);

const modifyCharactersImage = createAsyncThunk(
    "modify/modifyCharactersImage",
    async ({id, newCharacterImage}) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/character/${id}/image`, {
                    method: 'PATCH',
                    body: newCharacterImage,
    });
        const data = await response.json();
        return data;
    }
);

const deleteCharacter = createAsyncThunk(
    "modify/deleteCharacter",
    async (id) => {
        console.log(id);
        const response = await fetch(`http://localhost:3000/api/v1/update-info/character/${id}`, {
                    method: 'DELETE',
    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    character: [],
    isLoading: false,
    error: null,
};

const adminArticleSlice = createSlice({
    name: "modifyCharacters",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(modifyCharacters.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(modifyCharacters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.character = action.payload;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(modifyCharacters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export { modifyCharacters, modifyCharactersImage, deleteCharacter }

export default adminArticleSlice.reducer;