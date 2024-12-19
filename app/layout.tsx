import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Calendrier de l'Avent de Farm For Good",
  description:
    "Cette année, Farm For Good a décidé de vous gâter et de vous divertir quotidiennement, durant 24 jours, pour attendre Noël ensemble🎄avec un calendrier de l’Avent digital !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
