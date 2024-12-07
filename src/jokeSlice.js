import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// function fetchJoke(category) {
//   
// }

const fetchJoke = createAsyncThunk("jokes/jokescategory", async function (category) {
    return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(function (result) {
            return result.data.value
        })

})

const initialState = {
    joke: "No joke"
}

const JokeSlice = createSlice({
    name: "joke",
    initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchJoke.pending, function () {
            console.log("Loding...")
        }).addCase(fetchJoke.fulfilled, (state, action) => {
            state.joke = action.payload
        })
    }
})
export default JokeSlice

export { fetchJoke }