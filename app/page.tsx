'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Userstable from "@/app/_components/usersTable";

export default function Home() {

  return (
    <main className="flex flex-col gap-10 dark:bg-black">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-5">
        <div className="flex flex-col gap-1">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" />
        </div>
        <Button type="submit">Adicionar</Button>
      </div>

      <Userstable />
    </main>
  );
}
