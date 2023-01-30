const { createSlice } = require("@reduxjs/toolkit");

const name = 'login';

const loginSlice = createSlice({
    name: name,
    initialState: {
        status: false,
        message: "",
    },
});

export default loginSlice.reducer;