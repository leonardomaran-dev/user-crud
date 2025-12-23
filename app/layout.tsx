import { ReactQueryProvider } from "@/lib/providers/react-query";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User CRUD",
  description: "Desenvolvido por Leonardo Maran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} antialiased min-h-screen w-4/5 mx-auto py-6`}
      >
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
