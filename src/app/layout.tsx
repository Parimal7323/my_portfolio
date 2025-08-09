import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Parimal Priyanshu - Full-Stack Developer",
  description: "Full-stack Developer • Java | Spring Boot | React | Next.js",
  keywords: ["Parimal Priyanshu", "Full-Stack Developer", "Java", "Spring Boot", "React", "Next.js"],
  authors: [{ name: "Parimal Priyanshu" }],
  openGraph: {
    title: "Parimal Priyanshu - Full-Stack Developer",
    description: "Full-stack Developer • Java | Spring Boot | React | Next.js",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
