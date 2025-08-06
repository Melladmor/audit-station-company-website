import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import Header from "@/components/NavBar/Header";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "react-phone-input-2/lib/style.css";
import "react-international-phone/style.css";
import Footer from "@/components/Footer/Footer";
import ToasterWrapper from "@/components/ClientWrapper/ToastWrapper";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta.layout");

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.svg",
    },
    keywords: t("keywords")
      .split(",")
      .map((k) => k.trim()),
    alternates: {
      canonical: "https://www.auditstation.org/",
    },
    verification: {
      google: "XUSTmFw9hn5R85RjNsRR1GIbiuG3MNVaZxoZB51AOzE",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "en" ? "ltr" : "rtl"}
      className={`${poppins.className}`}
      suppressHydrationWarning
    >
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AccountingService",
            name: "Audit Station",
            image: "/favicon.svg",
            "@id": "",
            url: "https://www.auditstation.org/",
            telephone: "+971586028902",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Office No: 1906 - Grosvenor Business Bay Tower - Marasi Dr - Business Bay",
              addressLocality: "Dubai",
              postalCode: "6263",
              addressCountry: "AE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.1884574430321,
              longitude: 55.269079784658366,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Monday",
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Tuesday",
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Wednesday",
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Thursday",
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Friday",
                opens: "10:00",
                closes: "19:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "19:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/auditstationme",
              "https://twitter.com/auditstation",
              "https://www.instagram.com/auditstation/",
              "https://www.linkedin.com/company/auditstation",
            ],
          })}
        </script>

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZ9W6JFJ');`,
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4GR53BEVBS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4GR53BEVBS');`,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <Header />
            <ToasterWrapper locale={locale} />
            <div className="bg-light-bodyBg dark:bg-dark-bodyBg xl:pb-[250px] lg:pb-[200px] md:pb-[100px] ">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
