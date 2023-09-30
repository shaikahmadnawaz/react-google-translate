import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    text: "",
    translatedText: "",
}

const translationSlice = createSlice({
    name: "translation",
    initialState,
    reducers:{
        setText: (state, action)=>{
            state.text = action.payload;
        },
        setTranslatedText: (state, action)=>{
            state.translatedText = action.payload;
        },
        clearTranslation: (state)=>{
            state.text = "";
            state.translatedText = "";
        }
    }
})

export const { setText, setTranslatedText, clearTranslation } = translationSlice.actions;

export default translationSlice.reducer;