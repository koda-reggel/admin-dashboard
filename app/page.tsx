import DashboardAside from "./_sections/dashboard-aside";
import DashboardMain from "./_sections/dashboard-main";
import DashboardNavbar from "./_sections/dashboard-navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="border-b p-4">
        <DashboardNavbar />
      </div>

      <div className="flex flex-col lg:flex-row xl:max-w-screen-xl xl:mx-auto lg:h-[calc(100vh-73px)] p-4">
        <DashboardMain />
        <DashboardAside />
      </div>
    </div>
  );
}
