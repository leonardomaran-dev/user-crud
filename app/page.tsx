import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {

  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.from('users').select()

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </div>
  );
}
