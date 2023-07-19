import Header from "@/components/Header";
import "./globals.css";
import { Orbitron } from "next/font/google";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import GoogleAnalytics from "@/lib/GoogleAnalytics";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const orbit = Orbitron({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as Locale;

  const dictionary = await getDictionary(lang);
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang as Locale;

  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={params.lang}
      className="sm:snap-y sm:snap-proximity "
      suppressHydrationWarning
    >
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.GA_TRACKING_ID as string}
        />
      )}
      <body
        className={`${orbit.className} dark:bg-black dark:text-slate-300 text-slate-700`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header dictionary={dictionary["top-nav"]} />
          <div className="h-screen scroll-smooth ">
            {children}

            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
