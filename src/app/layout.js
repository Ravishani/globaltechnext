import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://globaltechnext.com"),

  title: {
    default: "GlobalTechNext | Web Development & IT Solutions",
    template: "%s | GlobalTechNext",
  },

  description:
    "GlobalTechNext is a digital technology company providing web development, mobile app development, custom software, UI/UX design, eCommerce solutions, and IT services for businesses worldwide.",

  keywords: [
    "GlobalTechNext",
    "web development company",
    "web development services",
    "website development company",
    "custom website development",
    "software development company",
    "software development services",
    "custom software development",
    "mobile app development company",
    "mobile application development",
    "Laravel development company",
    "Laravel development services",
    "React development company",
    "React development services",
    "Next.js development company",
    "Next.js development services",
    "PHP development company",
    "frontend development company",
    "backend development company",
    "full stack development company",
    "ecommerce development company",
    "ecommerce website development",
    "UI UX design company",
    "UI UX design services",
    "responsive web development",
    "business website development",
    "digital solutions company",
    "IT solutions company",
    "IT services company",
    "technology solutions",
    "digital transformation services",
    "web application development",
    "API development services",
    "custom web application development",
    "business software solutions",
  ],

  authors: [
    {
      name: "GlobalTechNext",
      url: "https://globaltechnext.com",
    },
  ],

  creator: "GlobalTechNext",
  publisher: "GlobalTechNext",
  applicationName: "GlobalTechNext",

  category: "Technology",

  classification:
    "Web Development, Software Development, Mobile App Development, IT Services",

  alternates: {
    canonical: "https://globaltechnext.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://globaltechnext.com",
    siteName: "GlobalTechNext",
    title: "GlobalTechNext | Web Development & IT Solutions",
    description:
      "Build, grow and transform your business with GlobalTechNext. We provide web development, mobile apps, custom software, UI/UX design, eCommerce and digital technology solutions.",
    images: [
      {
        url: "/logo.webp",
        width: 512,
        height: 512,
        alt: "GlobalTechNext - Web Development & IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GlobalTechNext | Web Development & IT Solutions",
    description:
      "Web development, mobile apps, custom software, UI/UX design, eCommerce and IT solutions by GlobalTechNext.",
    images: ["/logo.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  other: {
    "geo.region": "IN",
    "geo.placename": "India",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}