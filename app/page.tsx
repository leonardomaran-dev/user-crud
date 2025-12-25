'use client'
import Userstable from "@/app/_components/usersTable";
import UserCreate from "./_components/userCreate";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <main className="flex flex-col gap-10 dark:bg-black">

      <div className="fixed top-0 right-0 flex justify-end w-full p-4 items-center">
        {theme === "dark" ? (
          <Button onClick={toggleTheme}><Sun /></Button>
        ) : (
          <Button onClick={toggleTheme}><Moon /></Button>
        )}
      </div>

      <UserCreate />

      <Userstable />
    </main>
  );
}
