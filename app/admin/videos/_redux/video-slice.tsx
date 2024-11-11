import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VideosState } from './video-state';
import { Video } from '@/models/video';

const initialState: VideosState = {
	videos: [],
};

export const videoSlice = createSlice({
	name: 'videoSlice',
	initialState,
	reducers: {
		videosLoaded(state: VideosState, action: PayloadAction<Video[]>) {
			return {
				...state,
				videos: action.payload,
			};
		},
	},
});

export const videoActions = videoSlice.actions;

export default videoSlice.reducer;
