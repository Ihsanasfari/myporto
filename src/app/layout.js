import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "../components/TopNav";
const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "My Porto",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <html className="mx-auto max-w-[1920px] bg-black" lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
