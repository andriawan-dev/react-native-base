import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/auth/data/slices/loginSlice";

export const store = configureStore({
    reducer: {
        login: loginSlice,
    }
});