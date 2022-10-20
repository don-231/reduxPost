import { createSlice } from "@reduxjs/toolkit";

const initialState = [
{ id: "0", name: "Duke Itit" },
{ id: "1", name: "Joee Itud" },
{ id: "2", name: "Frank Ikosso" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users

export default usersSlice.reducer