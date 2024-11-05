import DashboardAside from './_sections/dashboard-aside';
import DashboardMain from './_sections/dashboard-main';
import DashboardNavbar from './_sections/dashboard-navbar';

export default function Home() {
	return (
		<div className='w-full flex flex-col h-full flex-1'>
			<div className='border-b w-full flex justify-center'>
				<DashboardNavbar />
			</div>

			<div className='flex flex-col lg:flex-row gap-4 p-4 xl:max-w-screen-xl xl:mx-auto lg:h-[calc(100vh-65px)] xl:px-4 xl:py-0 '>
				<DashboardMain />
				<DashboardAside />
			</div>
		</div>
	);
}
