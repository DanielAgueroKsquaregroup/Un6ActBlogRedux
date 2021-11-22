import { createAsyncThunk } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1', )
                          .then(res => res.json());
        return response;
    }
);

export const getSinglePost = createAsyncThunk(
    'posts/FetchPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id', )
                               .then(res => res.json());
    }
);