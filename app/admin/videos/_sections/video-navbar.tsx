'use client';

import {
	user,
	Navbar,
	NavbarContent,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	Input,
} from '@nextui-org/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaVideo } from 'react-icons/fa';

export default function VideoNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (user) {
			console.log(user);
		}
	}, [user]);

	return (
		<div>
			<Navbar
				onMenuOpenChange={setIsMenuOpen}
				maxWidth='full'
				classNames={{ wrapper: 'px-4 h-16' }}
				className='h-16'
			>
				<NavbarContent>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className=' lg:hidden'
					/>
					<NavbarBrand className='font-bold text-xl'>Video</NavbarBrand>
				</NavbarContent>

				<NavbarContent justify='end'>
					<NavbarItem className='w-full'>
						<Input
							placeholder='Search anything in Siohioma..'
							startContent={<FaVideo />}
						/>
					</NavbarItem>
				</NavbarContent>
				<NavbarContent className='hidden sm:flex gap-4' justify='center'>
					<NavbarMenu>
						<NavbarMenuItem>
							<Link href='/' className='w-full' color='foreground'>
								Dashboard
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link href='/users' className='w-full' color='foreground'>
								User
							</Link>
						</NavbarMenuItem>
						<NavbarMenuItem>
							<Link href='/videos' className='w-full' color='foreground'>
								Videos
							</Link>
						</NavbarMenuItem>
					</NavbarMenu>
				</NavbarContent>
			</Navbar>
		</div>
	);
}