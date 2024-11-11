import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UsersState } from './users-state';
import { User } from '@/models/user';

const initialState: UsersState = {
	users: [],
};

export const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		usersLoaded(state: UsersState, action: PayloadAction<User[]>) {
			return {
				...state,
				users: action.payload,
			};
		},
		deleteUserButtonPressed(state: UsersState, action: PayloadAction<number>) {
			return {
				...state,
				id: action.payload,
			};
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
