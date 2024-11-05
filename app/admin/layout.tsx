import Sidebar from "./_sections/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-screen overflow-y-auto md:overflow-y-hidden">
      <Sidebar />
      {children}
    </div>
  );
}
