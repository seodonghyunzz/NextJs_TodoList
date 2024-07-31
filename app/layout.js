import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header/header";
import AuthContext from "./context/AuthContext";
import Menu from "./header/menu";
import Navbar from "./header/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthContext>
        <body className={inter.className}>
          <header className="Header">
              <Header/>
              <Menu/>
              <Navbar/>
          </header>
            {children}
        </body>
      </AuthContext>
    </html>
  );
}
