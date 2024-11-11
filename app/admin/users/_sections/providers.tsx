'use client';

import { useAppDispatch } from '@/hooks/hooks';
import { User } from '@/models/user';
import { ReactNode, useEffect } from 'react';
import { userActions } from '../_redux/user-slice';

export default function Providers({
	children,
	users,
}: {
	children: ReactNode;
	users?: User[];
}) {
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (users) {
			dispatch(userActions.usersLoaded(users));
		}
	}, [users, dispatch]);

	return <>{children}</>;
}
