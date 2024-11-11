export function index() {
	return fetch('http://127.0.0.1:8000/api/users', {
		method: 'GET',
		next: { tags: ['users'] },
	});
}

export function store({
	name,
	email,
	location,
	status,
	skills,
	sub_skills,
}: {
	name: string;
	email: string;
	location: string;
	status: string;
	skills?: string;
	sub_skills?: string;
}) {
	return fetch('http://127.0.0.1:8000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		next: { tags: ['users'] },
		body: JSON.stringify({
			email: email,
			name: name,
			location: location,
			status: status,
			skills: skills,
			sub_skills: sub_skills,
		}),
	});
}

export function destroy(id: number) {
	return fetch(`http://127.0.0.1:8000/api/users/${id}`, {
		method: 'DELETE',
		next: { tags: ['users'] },
	});
}

export function Put({
	id,
	name,
	email,
	location,
	status,
	skills,
	sub_skills,
}: {
	id: number;
	name: string;
	email: string;
	location: string;
	status: string;
	skills?: string;
	sub_skills?: string;
}) {
	try {
		return fetch(`http://127.0.0.1:8000/api/users/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			next: { tags: ['users'] },
			body: JSON.stringify({
				email: email,
				name: name,
				location: location,
				status: status,
				skills: skills,
				sub_skills: sub_skills,
			}),
		});
	} catch (err) {
		console.log(err);
	}
}
