import Header from "@/components/Header";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Footer from "@/components/Footer";

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
    <html lang="en" className="snap-y snap-proximity">
      <body
        className={`${inter.className}  dark:bg-rebel-black dark:text-amber-50 text-slate-700 `}
      >
        <Header />
        <div className="h-screen scroll-smooth ">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
