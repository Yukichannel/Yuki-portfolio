import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/contexts/ProjectContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Baljir - Full Stack Developer",
  description: "Senior full-stack developer with expertise in modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
