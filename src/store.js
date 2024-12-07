import {configureStore} from "@reduxjs/toolkit"
import JokeSlice from "./jokeSlice"

const store=configureStore({
    reducer:{
        joke:JokeSlice.reducer
    }
})
export default store