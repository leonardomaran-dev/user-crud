import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ReactQueryProvider } from "@/lib/providers/react-query";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRUD",
  authors: [{ name: "Leonardo Maran" }],
  description: "CRUD de Usuários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased min-h-screen dark:bg-black`}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <ReactQueryProvider>
            <div className="mx-auto w-full max-w-5xl px-4 py-6">
              {children}
            </div>
          </ReactQueryProvider>
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
