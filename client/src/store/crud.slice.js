import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const createCharacter = createAsyncThunk(
    "create/createCharacter",
    async (characterInfo) => {
        const response = await fetch('http://localhost:3000/api/v1/characters/create', {
                    method: 'POST',
                    body: characterInfo
                    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    isLoading: false,
    sucess : false,
};

const crudSlice = createSlice({
    name: "crud",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(createCharacter.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createCharacter.fulfilled, (state, action) => {
            state.isLoading = false;
            state.sucess = true;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(createCharacter.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action.error.message);
        })

    }
});

export { createCharacter };

export default crudSlice.reducer;
