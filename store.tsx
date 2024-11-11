import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './app/counter/_redux/counter-slice';
import userSlice from './app/admin/users/_redux/user-slice';
import videoSlice from './app/admin/videos/_redux/video-slice';

export const store = configureStore({
	reducer: {
		counterState: counterSlice,
		userState: userSlice,
		videoState: videoSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
