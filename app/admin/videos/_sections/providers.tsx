'use client';

import { useAppDispatch } from '@/hooks/hooks';
import { Video } from '@/models/video';
import { ReactNode, useEffect } from 'react';
import { videoActions } from '../_redux/video-slice';

export default function Providers({
	children,
	videos,
}: {
	children: ReactNode;
	videos?: Video[];
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (videos) {
			dispatch(videoActions.videosLoaded(videos));
		}
	}, [videos, dispatch]);

	return <>{children}</>;
}
