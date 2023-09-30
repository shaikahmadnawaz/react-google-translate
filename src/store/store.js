import { configureStore } from "@reduxjs/toolkit";

import translationReducer from "../slices/translationSlice";

export default configureStore({
    reducer:{
        translation: translationReducer,
    }
});