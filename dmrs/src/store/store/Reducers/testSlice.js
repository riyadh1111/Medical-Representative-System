import { createSlice } from '@reduxjs/toolkit';

export const homeDataSlice = createSlice({
	name: 'test',
	initialState: {
		authToken: "",
		languageChange:"en",
		success:"",
		newOtp:""
	},
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		saveAuthToken: (state, action) => {
			state.authToken = action.payload;
		},
	
		saveSuccessmsg:(state, action)=>{
			state.success=action.payload;
		},

		saveOtp:(state, action) =>{
			state.newOtp = action.payload;
		},
	},
});

export const {
	saveAuthToken, saveSuccessmsg, saveOtp

} = homeDataSlice.actions;

export default homeDataSlice.reducer;