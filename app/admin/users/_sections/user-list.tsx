'use client';

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	SelectItem,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@nextui-org/react';

import {
	Modal,
	ModalContent,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/react';
import { BsThreeDots } from 'react-icons/bs';

import { Select } from '@nextui-org/select';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { VscSettings } from 'react-icons/vsc';
import { CiCircleCheck, CiLocationOn } from 'react-icons/ci';
import { useAppSelector } from '@/hooks/hooks';

export default function UserList() {
	const userState = useAppSelector((user) => user.userState);

	const {
		isOpen: isEdit,
		onOpen: onEdit,
		onOpenChange: onEditChange,
	} = useDisclosure();

	return (
		<>
			<div className='flex justify-between gap-4'>
				<div className='flex gap-4 w-96'>
					<Select startContent={<CiCircleCheck />} placeholder='Status'>
						<SelectItem key={'subscribe'}>Subscribe</SelectItem>
						<SelectItem key={'unsubscribe'}>Unsubscribe</SelectItem>
						<SelectItem key={'bounced'}>Bounced</SelectItem>
					</Select>
					<Select startContent={<CiLocationOn />} placeholder='Location'>
						<SelectItem key={'usa'}>New York,USA</SelectItem>
						<SelectItem key={'uk'}>London,UK</SelectItem>
						<SelectItem key={'france'}>Paris,France </SelectItem>
						<SelectItem key={'germany'}>Berlin,Germany </SelectItem>
						<SelectItem key={'japan'}>Tokyo,Japan </SelectItem>
						<SelectItem key={'australia'}>Sydney,Australia </SelectItem>
					</Select>
				</div>
				<div className='flex w-40'>
					<Select startContent={<VscSettings />} placeholder='Display'>
						<SelectItem key={'name'}>Name</SelectItem>
						<SelectItem key={'email'}>Email </SelectItem>
						<SelectItem key={'location'}>Location </SelectItem>
						<SelectItem key={'Status'}>Status </SelectItem>
						<SelectItem key={'skills'}>SKills </SelectItem>
						{/* <SelectItem key={"subskills"}>Sub Skills </SelectItem> */}
					</Select>
				</div>
			</div>

			<div
				className='overflow-auto'
				style={{ maxHeight: '800px', width: '100%' }}
			>
				<Table
					aria-label='Controlled table example with dynamic content'
					selectionMode='multiple'
				>
					<TableHeader
						columns={[
							{
								key: 'name',
								label: 'Name',
							},
							{
								key: 'email',
								label: 'Email',
							},
							{
								key: 'location',
								label: 'Location',
							},
							{
								key: 'status',
								label: 'Status',
							},
							{
								key: '',
								label: 'Action',
							},
						]}
					>
						{(column) => (
							<TableColumn key={column.key}>{column.label}</TableColumn>
						)}
					</TableHeader>

					<TableBody items={userState.users}>
						{(item) => (
							<TableRow key={item.id}>
								<TableCell>{item.name}</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>{item.location}</TableCell>
								<TableCell>{item.status}</TableCell>
								<TableCell>
									<div>
										<Dropdown>
											<DropdownTrigger>
												<Button isIconOnly variant='light'>
													<BsThreeDots />
												</Button>
											</DropdownTrigger>
											<DropdownMenu>
												<DropdownItem onPress={onEdit}>Edit</DropdownItem>

												<DropdownItem color='danger'>Delete</DropdownItem>
											</DropdownMenu>
										</Dropdown>
									</div>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			<Modal isOpen={isEdit} onOpenChange={onEditChange} placement='center'>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody className='flex flex-col'>
								<Input
									label='Name'
									placeholder='John Doe'
									labelPlacement='outside'
								></Input>
								<Input
									label='Email'
									placeholder='John.Doe@gmail.com'
									labelPlacement='outside'
								></Input>
								<Input
									label='Location'
									placeholder='Your location'
									labelPlacement='outside'
								></Input>
								<Select label='Select status'>
									<SelectItem key='Subscribe'> Subscribe</SelectItem>
									<SelectItem key='Unsubscribe'> Unsubscribe</SelectItem>
								</Select>
							</ModalBody>
							<ModalFooter className='flex'>
								<Button
									onClick={onClose}
									color='danger'
									className='text-gray-600 bg-white'
								>
									Cancel
								</Button>
								<Button onPress={onClose} className='text-white bg-black'>
									Save
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
