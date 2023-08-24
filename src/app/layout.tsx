import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ClerkProvider } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Wallpaper from "@/../public/images/wallpaper.jpg";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`prose dark:prose-invert ${inter.className}`}>
          <header>
            <h1>A FANTASTIC LIST OF THINGS I LIKE</h1>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/blog"> Blog</Link>
              <UserButton afterSignOutUrl="/" />
            </nav>
          </header>
          {children}
          <Image
            src={Wallpaper}
            alt="Wallpaper"
            placeholder="blur"
            style={{
              margin: "auto",
            }}
          />
          
          <footer>
            <p>
              Now that you've reached the bottom of the page, we hope you've
              enjoyed your time. Feel free to keep looking around.
            </p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
