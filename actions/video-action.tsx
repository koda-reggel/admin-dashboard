'use server';

import { destroy, index } from '@/service/video-service';
import { revalidateTag } from 'next/cache';

export async function indexVideos() {
	const videos = await index();
	return videos.json();
}

export async function deleteVideo(id: number) {
	try {
		const res = await destroy(id);

		if (res) {
			revalidateTag('video');
		}

		console.log(res);
	} catch (err) {
		console.log(err);
	}
}
