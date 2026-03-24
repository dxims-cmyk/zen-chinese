import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZEN | Fresh Chinese Takeaway in Dennistoun, Glasgow",
  description:
    "Fresh Chinese food, cooked to order in our open kitchen. Rice included with every main. Dennistoun, Glasgow. Call 0141 556 1100.",
  openGraph: {
    title: "ZEN | Fresh Chinese Takeaway in Dennistoun, Glasgow",
    description:
      "Fresh Chinese food, cooked to order in our open kitchen. Rice included with every main.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Zen Chinese Takeaway",
              description:
                "Fresh Chinese takeaway with open kitchen in Dennistoun, Glasgow. Rice included with every main dish.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "618 Alexandra Parade",
                addressLocality: "Glasgow",
                postalCode: "G31 3BT",
                addressCountry: "GB",
              },
              telephone: "+441415561100",
              openingHours: "Mo-Su 13:00-23:00",
              servesCuisine: ["Chinese"],
              priceRange: "£",
            }),
          }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
