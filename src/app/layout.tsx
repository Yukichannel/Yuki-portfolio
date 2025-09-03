import type { Metadata } from "next";
import { GeistSans, GeistMono } from "@vercel/font/geist";
import "./globals.css";
import { ProjectProvider } from "@/contexts/ProjectContext";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}
