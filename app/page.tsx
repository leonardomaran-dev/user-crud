import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Userstable from "@/app/_components/usersTable";
import { createClient } from "@/lib/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data } = await supabase.from('users').select().range(0, 9)

  return (
    <main className="flex flex-col gap-10 justify-center dark:bg-black">
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" />
        </div>
        <div className="flex gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <Button type="submit">Adicionar</Button>
      </div>
      <Userstable users={data || []} />
    </main>
  );
}
