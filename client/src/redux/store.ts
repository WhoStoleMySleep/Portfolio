import { configureStore } from '@reduxjs/toolkit';
import blogs from './reducers/blogs';

export default configureStore({
  reducer: {
    blogs
  }
});