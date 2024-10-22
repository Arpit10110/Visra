import {configureStore} from "@reduxjs/toolkit"
import { Visrareducer } from "./Reducer.js"
const store= configureStore({
    reducer:{
        Visra :Visrareducer
    }
})
export default store  