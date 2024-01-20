import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const allowArticle = createAsyncThunk(
    "article/allowArticle",
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/article/${id}`, {
                    method: 'PATCH',
    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    category: [],
    isLoading: false,
    error: null,
};

const adminArticleSlice = createSlice({
    name: "adminAllowArticle",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(getUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export { allowArticle }

export default adminArticleSlice.reducer;