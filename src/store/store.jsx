import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import loginSlice from "../features/authentication/loginSlice";

const store = configureStore({
    reducer: {
        modal: modalSlice,
        login: loginSlice,
    }
})

export default store; 