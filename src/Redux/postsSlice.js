import { createSlice } from '@reduxjs/toolkit'

// let savedState = JSON.parse(localStorage.getItem('reduxState'))

// const persistedPosts = (savedState && savedState.posts !== undefined )
//   ? savedState.posts
//   : []
//   console.log(savedState.posts);

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    currentPosts: []
  }, 
  reducers: {
    setCurrentPosts: 
      (state, action) => {
        state.currentPosts = action.payload;
      }
  }
})

export const { setCurrentPosts } = postsSlice.actions

export const currentPosts = state => state.posts.currentPosts;

export default postsSlice.reducer