import { getServerSession } from "@/lib/next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function IndexPage() {
  const serverSession = await getServerSession();

  if (serverSession) {
    redirect("/feed");
  }

  return <Link href="api/auth/signin">Sign in</Link>;
}
