'use client'
import Userstable from "@/app/_components/usersTable";
import UserCreate from "./_components/userCreate";

export default function Home() {

  return (
    <main className="flex flex-col gap-10 dark:bg-black">
      <UserCreate />

      <Userstable />
    </main>
  );
}
