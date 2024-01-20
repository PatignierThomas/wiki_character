import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const allowArticle = createAsyncThunk(
    "article/allowArticle",
    async ({id, validation}) => {
        try {

        const response = await fetch(`http://localhost:3000/api/v1/update-info/article/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({validation}),

    });
        const data = await response.json();
        return data;
} catch (error) {
    console.log(error);
}
    }
);



const initialState = {
    article: [],
    isLoading: false,
    error: null,
};

const adminArticleSlice = createSlice({
    name: "adminAllowArticle",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(allowArticle.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allowArticle.fulfilled, (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(allowArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
});

export { allowArticle }

export default adminArticleSlice.reducer;