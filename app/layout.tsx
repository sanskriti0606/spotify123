"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"; 
const inter = Inter({ subsets: ["latin"] });
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
      <body className={inter.className}>
          <div className="flex">
            <Sidebar />
            <main className="flex-1 ml-64">
              <Header />
              {children}
            </main>
          </div>
        </body>
      </html>
    </Provider>
  );
}
