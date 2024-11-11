export function index() {
	return fetch('http://127.0.0.1:8000/api/videos', {
		method: 'GET',
	});
}

// export function store({
// 	title,
// 	image,
// 	description,
// 	duration,
// }: {
// 	title: string;
// 	image: string;
// 	description: string;
// 	duration: string;
// }) {
// 	return fetch('http://127.0.0.1:8000/api/videos', {
// 		method: 'POST',
// 		headers: {
// 			'Content-Type': 'application/json',
// 		},
// 		next: { tags: ['videos'] },
// 		body: JSON.stringify({
// 			image: image,
// 			title: title,
// 			description: description,
// 			duration: duration,
// 		}),
// 	});
// }

export function destroy(id: number) {
	return fetch(`http://127.0.0.1:8000/api/videos/${id}`, {
		method: 'DELETE',
		next: { tags: ['video'] },
	});
}
