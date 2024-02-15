import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface UserState {
    name: string;
    email: string;
    isVerified: boolean;
    isLoading: boolean;
}

const initialState: UserState = {
    name: 'n/a',
    email: 'n/a',
    isVerified: false,
    isLoading: false
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        verify: (state: UserState) => {
            state.isVerified = true;
        },
        editName: (state: UserState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        editEmail: (state: UserState, action: PayloadAction<string>) => {
            state.email = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(unverifyAsync.pending, (state: UserState) => {
                state.isLoading = true;
            })
            .addCase(unverifyAsync.fulfilled, (state: UserState) => {
                state.isVerified = false
                state.isLoading = false;
            });
    }
});

export const unverifyAsync = createAsyncThunk(
    "userSlice/unverifyAsync",
    async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2s
    }
);

export const {
    editName,
    editEmail,
    verify,
} = userSlice.actions;
export default userSlice.reducer;