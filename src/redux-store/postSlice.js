import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk(
  "post/fetchPost",
  async () => {
    const resp = await axios.get('https://dummyjson.com/posts?limit=15');
    return resp.data.posts;
  }
);

export const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postId, title, body }) => {
    const resp = await axios.put(`https://dummyjson.com/auth/posts/${postId}`, {
      title,
      body
    });
    return resp.data.post;
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState: {
    items: [],
    loading: false,
    error: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.items = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(editPost.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        const updatedPost = action.payload;
        const index = state.items.findIndex(post => post.id === updatedPost.id);
        if (index !== -1) {
          state.items[index] = updatedPost;
        }
      })
      .addCase(editPost.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const postActions = postSlice.actions;
export const postReducer = postSlice.reducer;