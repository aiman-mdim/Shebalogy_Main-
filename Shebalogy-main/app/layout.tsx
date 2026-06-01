import type { Metadata } from "next";
import logo from "@/assets/logo.png";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shebalogy — AI Healthcare for Bangladesh",
  description:
    "AI-augmented healthcare: cancer detection, blood donation, mental health, medicine reminders, and a 24/7 AI assistant for Bangladesh.",
  authors: [{ name: "Shebalogy" }],
  openGraph: {
    title: "Shebalogy — AI Healthcare for Bangladesh",
    description:
      "Cancer detection, blood donation, mental wellness, medicine reminders, and AI assistant.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: logo.src,
    apple: logo.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Bengali:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
