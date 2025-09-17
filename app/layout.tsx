import { ClerkProvider } from "@clerk/nextjs";
import { Outfit, Oxanium } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Provider from "@/components/Provider";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export const metadata = {
  title: "Game Console Store",
  description: "Buy retro-inspired game consoles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${oxanium.variable} ${outfit.variable}`}>
          <Provider>
            <Navbar />
            <main className="h-screen p-5 pt-21">{children}</main>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
