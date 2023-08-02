import { createSlice } from '@reduxjs/toolkit';

export const blogs = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { setBlogs } = blogs.actions;

export default blogs.reducer;