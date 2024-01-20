import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const allCategories = createAsyncThunk(
    "category/allCategories",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/info/categories', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const allUsers = createAsyncThunk(
    "user/allUsers",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/info/users', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const allArticles = createAsyncThunk(
    "article/allArticles",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/info/articles', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const allCharacters = createAsyncThunk(
    "character/allCharacters",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/info/characters', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const allRoles = createAsyncThunk(
    "role/allRoles",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/info/roles', {
                    method: 'GET',
                    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    category: [],
    user: [],
    character: [],
    role: [],
    article: [],
    isLoading: false,
    error: null,
};

const db_infoSlice = createSlice({
    name: "db_info",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(allCategories.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.category = action.payload;
        })
        .addCase(allCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(allUsers.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(allUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(allArticles.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allArticles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.article = action.payload;
        })
        .addCase(allArticles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(allCharacters.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allCharacters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.character = action.payload;
        })
        .addCase(allCharacters.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

        .addCase(allRoles.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(allRoles.fulfilled, (state, action) => {
            state.isLoading = false;
            state.role = action.payload;
        })
        .addCase(allRoles.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        })

    }
});

export { allCategories, allUsers, allCharacters, allRoles, allArticles };

export default db_infoSlice.reducer;