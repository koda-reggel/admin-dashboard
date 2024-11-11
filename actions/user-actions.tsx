'use server';

import { destroy, index, Put, store } from '@/service/account-service';
import { revalidateTag } from 'next/cache';

export async function storeUser(_prevState: any, formData: FormData) {
	try {
		const res = await store({
			email: formData.get('email')?.toString() ?? '',
			name: formData.get('name')?.toString() ?? '',
			location: formData.get('location')?.toString() ?? '',
			status: formData.get('status')?.toString() ?? '',
			skills: formData.get('skills')?.toString() ?? 'undefined',
			sub_skills: formData.get('subSkills')?.toString() ?? 'undefined',
		});

		if (res) {
			revalidateTag('users');
		}
	} catch (err) {
		console.log(err);
	}
}

export async function indexUsers() {
	const user = await index();
	return user.json();
}

export async function deleteUser(id: number) {
	try {
		const res = await destroy(id);

		if (res) {
			revalidateTag('users');
		}
	} catch (err) {
		console.log(err);
	}
}

export async function updateUser(
	params: { userId: number },
	_prevState: any,
	formData: FormData
) {
	try {
		const res = await Put({
			id: params.userId ?? 0,
			email: formData.get('email')?.toString() ?? '',
			name: formData.get('name')?.toString() ?? '',
			location: formData.get('location')?.toString() ?? '',
			status: formData.get('status')?.toString() ?? '',
			skills: formData.get('skills')?.toString() ?? 'undefined',
			sub_skills: formData.get('subSkills')?.toString() ?? 'undefined',
		});

		if (res) {
			revalidateTag('users');
		}
	} catch (err) {
		console.log('update:', err);
	}
}
