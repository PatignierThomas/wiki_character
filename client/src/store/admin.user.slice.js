import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getUser = createAsyncThunk(
    "user/getUser",
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/user/${id}`, {
                    method: 'GET',
    });
        const data = await response.json();
        return data;
    }
);

const updateUser = createAsyncThunk(
    "user/updateUser",
    async (userInfo) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/user/${userInfo.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userInfo)
                    });
        const data = await response.json();
        return data;
    }
);

const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (id) => {
        const response = await fetch(`http://localhost:3000/api/v1/update-info/user/${id}`, {
                    method: 'DELETE',
                    });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    user: [],
    isLoading: false,
    error: null,
};

const adminUserSlice = createSlice({
    name: "adminUpdateUser",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(getUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action.error.message);
        })


        .addCase(updateUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action.error.message);
        })


        .addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            console.log(action.error.message);
        })
    }
});

export { getUser, updateUser, deleteUser };

export default adminUserSlice.reducer;

    