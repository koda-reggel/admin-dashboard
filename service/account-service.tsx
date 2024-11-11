import { User } from '@/models/user';

export function index() {
	return fetch('http://127.0.0.1:8000/api/users', {
		method: 'GET',
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
	});
}

export function Put({ id, user }: { id: number; user: User }) {
	return fetch(`http://127.0.0.1:8000/api/users/${id}`, {
		method: 'PUT',
		body: JSON.stringify({
			email: user.email,
			name: user.name,
			location: user.location,
			status: user.status,
			skills: user.skills,
			sub_skills: user.subSkills,
		}),
	});
}
