'use client';

import { ReactNode } from 'react';
import { store } from '@/store';
import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<Provider store={store}>
			<NextUIProvider>{children}</NextUIProvider>
		</Provider>
	);
}
