import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const registerAccount = createAsyncThunk(
    "register/registerAccount",
    async (creds) => {
        const response = await fetch('http://localhost:3000/api/v1/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(creds)
                    });
        const data = await response.json();
        return data;
    }
);

const loginAccount = createAsyncThunk(
    "login/loginAccount",
    async (creds) => {
        const response = await fetch('http://localhost:3000/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(creds)
                    });
        const data = await response.json();
        return data;
    }
);

const logoutAccount = createAsyncThunk(
    "logout/logoutAccount",
    async () => {
        const response = await fetch('http://localhost:3000/api/v1/auth/logout', {
                    method: 'POST',
        });
        const data = await response.json();
        return data;
    }
);

const initialState = {
    isLogged: false,
    isLoading: false,
    sucess : false,
    username: "",
    role: null,
    error: null,
};

const authSlice = createSlice({
    name: "register",
    initialState,
    extraReducers: (builder) =>  {

        builder
        .addCase(registerAccount.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.sucess = true;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(registerAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            console.log(action.error.message);
        })


        .addCase(loginAccount.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginAccount.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLogged = true;
            state.username = action.payload.name;
            state.role = action.payload.role_id;
            state.sucess = true;
            if (action.payload.error) {
                state.error = action.payload.error;
            }
        })
        .addCase(loginAccount.rejected, (state, action) => {
            state.isLoading = false;
            state.isLogged = false;
            console.log(action.error.message);
        })


        .addCase(logoutAccount.fulfilled, (state, action) => {
            state.isLogged = action.payload.loged;
            state.username = "";
            state.role = null;
        });

    }
});

export { registerAccount, loginAccount, logoutAccount };

export default authSlice.reducer;


