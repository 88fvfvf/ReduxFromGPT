import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk('posts/getPosts', async (_, { rejectWithValue, dispatch }) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  } catch (error) {
    // Handle error
    console.error("Error fetching posts:", error);
    return rejectWithValue(error.message);
  }
});

export const deletePostById = createAsyncThunk(
    'posts/deletePostById',
    async (id,{rejectWithValue,dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    deletePost: (state,action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        console.log("Отправка");
      })
      .addCase(getPosts.fulfilled, (state) => {
        console.log("Получено");
      })
      .addCase(getPosts.rejected, (state) => {
        console.log("Ошибка");
      })
      .addCase(deletePostById.pending, (state) => {
        console.log("Delete: Отправка");
      })
      .addCase(deletePostById.fulfilled, (state) => {
        console.log("Delete: Получено");
      })
      .addCase(deletePostById.rejected, (state) => {
        console.log("Delete: Ошибка");
      })
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;
