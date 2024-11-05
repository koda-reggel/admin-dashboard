import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './app/counter/_redux/counter-slice';

export const store = configureStore({
	reducer: {
		counterState: counterSlice,
	},
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
