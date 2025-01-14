import { redirect } from "next/navigation";
import Login from "./_sections/login";

export default function Page() {
  return redirect("/auth/login");
}
