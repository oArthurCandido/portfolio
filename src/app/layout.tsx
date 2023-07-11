import Header from "@/components/Header";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Arthur Candido - Portfólio Frontend Developer",
  description: "Portfólio de Arthur Candido - Desenvolvedor Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-br"
      className="sm:snap-y sm:snap-proximity "
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} dark:bg-black dark:text-slate-300 text-slate-700`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="h-screen scroll-smooth ">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
