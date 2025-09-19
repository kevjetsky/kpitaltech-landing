import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kpital Tech — Phone & Laptop Repair in Houston",
  description: "Fast, warrantied repairs. Free diagnostic. Mobile service available.",
  keywords: "phone repair, laptop repair, Houston, mobile repair, screen repair, battery replacement, water damage",
  authors: [{ name: "Kpital Tech" }],
  creator: "Kpital Tech",
  publisher: "Kpital Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kpitaltech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "We Fix Phones — Phone & Laptop Repair in Houston",
    description: "Fast, warrantied repairs. Free diagnostic. Mobile service available.",
    url: "https://kpitaltech.com",
    siteName: "We Fix Phones",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "We Fix Phones - Houston Device Repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "We Fix Phones — Phone & Laptop Repair in Houston",
    description: "Fast, warrantied repairs. Free diagnostic. Mobile service available.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "We Fix Phones",
    "description": "Professional phone and laptop repair services in Houston with same-day service and 90-day warranty.",
    "url": "https://we-fix-phones.com",
    "telephone": "505-524-3280",
    "email": "support@we-fix-phones.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "openingHours": [
      "Mo-Fr 09:00-19:00",
      "Sa 10:00-18:00", 
      "Su 12:00-17:00"
    ],
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "29.7604",
        "longitude": "-95.3698"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Screen Repair"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Battery Replacement"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Water Damage Recovery"
          }
        }
      ]
    },
    "areaServed": ["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland"],
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card"
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
