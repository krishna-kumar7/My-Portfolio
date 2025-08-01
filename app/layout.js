import { Outfit, Outfit as OutfitFont, Ovo, Ovo as OvoFont } from "next/font/google";
import "./globals.css";

const outfit = OutfitFont({
  subsets: ["latin"], weight: ["400","500","600","700"]
});

const ovo = OvoFont({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Krishna",
  description: "",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png"

  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
