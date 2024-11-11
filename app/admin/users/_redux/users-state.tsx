import { User } from '@/models/user';

export interface UsersState {
	users?: User[];
	id?: number;
	name?: string;
	email?: string;
	location?: string;
	status?: string;
	skills?: string;
	SubSkills?: string;
}
