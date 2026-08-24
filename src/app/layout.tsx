import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shendri Kenneth Yamba | Fullstack Developer & Automation Specialist",
  description:
    "Personal portfolio of Shendri Kenneth Yamba — fullstack developer and automation specialist building modern web apps, automating workflows, and integrating systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${syne.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-zinc-900 dark:bg-[#0a0a0a] dark:text-zinc-100">
        <ThemeProvider>
          <ClientWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
