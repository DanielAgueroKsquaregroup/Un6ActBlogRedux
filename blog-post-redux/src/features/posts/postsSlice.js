import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./postsThunks";

const initialState = {
    posts: [],
    selectedPostId: '',
    isLoading: false,
    hasError: false,
};

export const counterSlice = createSlice({
    name: 'posts',
    initialState,

    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPostId = action.payload;
        },
        addPost: (state, payload) => {
            state.posts = [...state.posts, ...payload.payload];
        },
    },
    extraReducers: (builder) => builder
        .addCase(getPosts.pending, (state) => {
            state.isLoading = true;
            state.hasError = false;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = [...state.posts, ...action.payload];
            state.isLoading = false;
        })
        .addCase(getPosts.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        }),
});

export const { setSelectedPost, addPost } = counterSlice.actions;
export default counterSlice.reducer;