import DashboardAside from "./_sections/dashboard-aside";
import DashboardMain from "./_sections/dashboard-main";
import DashboardNavbar from "./_sections/dashboard-navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="border-b py-4">
        <DashboardNavbar />
      </div>

      <div className="flex max-w-screen-xl mx-auto h-[calc(100vh-73px)]">
        <DashboardMain />
        <DashboardAside />
      </div>
    </div>
  );
}
