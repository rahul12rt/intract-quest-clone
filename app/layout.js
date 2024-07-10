import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Intract Quests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
