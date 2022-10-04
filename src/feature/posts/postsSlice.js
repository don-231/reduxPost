import { createSlice,nanoid } from '@reduxjs/toolkit';

const initialState = [
    { 
    id: '1', 
    title:'First Post',
    content: 'You are posting me for the first time'
    },
    { 
        id: '2', 
        title:'Best of me',
        content: 'You know the best of me'
        },
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload)
        }
      }
})
export const selectAllPosts = (state) => state.posts 

export const {postAdded} = postSlice.actions

export default postSlice.reducer

