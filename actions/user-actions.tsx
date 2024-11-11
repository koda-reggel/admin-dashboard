'use server';

import { destroy, index, store } from '@/service/account-service';

export async function storeUser(_prevState: any, formData: FormData) {
	return await store({
		email: formData.get('email')?.toString() ?? '',
		name: formData.get('name')?.toString() ?? '',
		location: formData.get('location')?.toString() ?? '',
		status: formData.get('status')?.toString() ?? '',
		skills: formData.get('skills')?.toString() ?? 'undefined',
		sub_skills: formData.get('subSkills')?.toString() ?? 'undefined',
	});
}

export async function indexUsers() {
	const user = await index();
	return user.json();
}

export async function deleteUser(id: number) {
	return await destroy(id);
}
