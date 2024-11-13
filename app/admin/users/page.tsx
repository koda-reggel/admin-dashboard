import { indexUsers } from "@/actions/user-actions";
import Providers from "./_sections/providers";
import UserList from "./_sections/user-list";
import UserNavbar from "./_sections/user-navbar";

export default async function Page() {
  const users = await indexUsers();
  return (
    <Providers users={users.data}>
      <div className="w-full flex flex-col p-4 gap-4">
        <UserNavbar />
        <UserList />
      </div>
    </Providers>
  );
}
