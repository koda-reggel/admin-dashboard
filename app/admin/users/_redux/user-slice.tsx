import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user-state';
import { User } from '@/models/user';

const initialState: UserState = {
	users: [],
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserButtonPressed(state: UserState, action: PayloadAction<User>) {
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				status: action.payload.status,
				skills: action.payload.skills,
				subSkills: action.payload.subSkills,
				location: action.payload.location,
			};
		},
		usersLoaded(state: UserState, action: PayloadAction<User[]>) {
			return {
				...state,
				users: action.payload,
			};
		},
		deleteUserButtonPressed(state: UserState, action: PayloadAction<User>) {
			return {
				...state,
				id: action.payload.id,
			};
		},
	},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
