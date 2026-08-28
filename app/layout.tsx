import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

export const metadata: Metadata = {
  title: "Mizhab Mujeeb NP | DevOps & Cloud Engineer",
  description: "DevOps & Cloud Engineer specializing in AWS, CI/CD, Docker, Kubernetes, and Infrastructure as Code. Building scalable, reliable cloud infrastructure.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "Docker", "CI/CD", "Terraform", "Infrastructure as Code"],
  authors: [{ name: "Mizhab Mujeeb NP" }],
  openGraph: {
    title: "Mizhab Mujeeb NP | DevOps & Cloud Engineer",
    description: "DevOps & Cloud Engineer specializing in AWS, CI/CD, and cloud infrastructure",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}