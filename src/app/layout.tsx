import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pabitra Jiban Maity",
  description: "Full Stack Developer with 4+ years of experience at Mphasis Limited, skilled in Python, Java, React.js, Kore.ai and Generative AI. Expert in RPA, AWS Cloud Technologies, and AI solutions.",
  icons: {
    icon: '/favicon-round.svg',
    shortcut: '/favicon-round.svg',
    apple: '/favicon-round.svg',
  },
  keywords: [
    "Pabitra Jiban Maity",
    "Full Stack Developer",
    "Generative AI",
    "RPA Developer",
    "Python Developer",
    "React Developer",
    "AWS Cloud",
    "UiPath",
    "Pega Robotics",
    "Kore.ai",
    "GPT-4",
    "Machine Learning",
    "Automation",
    "Kolkata",
    "India"
  ],
  authors: [{ name: "Pabitra Jiban Maity" }],
  creator: "Pabitra Jiban Maity",
  publisher: "Pabitra Jiban Maity",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pabitra-maity.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pabitra - Full Stack Developer & AI Specialist",
    description: "Full Stack Developer with 4+ years of experience specializing in Generative AI, RPA, and Cloud Technologies. Expert in Python, Java, React.js, and AWS solutions.",
    url: "https://pabitra-maity.dev",
    siteName: "Pabitra Portfolio",
    images: [
      {
        url: "/icon/1000085842.png",
        width: 1200,
        height: 630,
        alt: "Pabitra - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pabitra - Full Stack Developer & AI Specialist",
    description: "Full Stack Developer with 4+ years of experience specializing in Generative AI, RPA, and Cloud Technologies.",
    images: ["/icon/1000085842.png"],
    creator: "@pabitra_maity",
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon-round.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
