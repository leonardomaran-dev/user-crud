'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Userstable from "@/app/_components/usersTable";
import { useGetAllUsers } from "@/lib/hooks/useGetAllUsers";
import { Spinner } from "@/components/ui/spinner";
import { CircleX, RotateCw } from "lucide-react";

export default function Home() {
  const { data: users, isLoading, error } = useGetAllUsers()

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

      {isLoading ? <div className="flex items-center justify-center"><Spinner className="size-6" /></div> : <Userstable users={users || []} />}
      {error && <div className="flex flex-col items-center gap-2">
        <span className="flex items-center gap-2">
          <CircleX /> Ocorreu um Erro ao Obter os Usuários!
        </span>
        <RotateCw onClick={() => window.location.reload()} className="size-5 cursor-pointer hover:scale-105" />
      </div>}
    </main>
  );
}
