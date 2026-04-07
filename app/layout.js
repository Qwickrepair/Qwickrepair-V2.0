import "./globals.css";
import localFont from "next/font/local";

const roboto = localFont({
  src: "../public/fonts/roboto.ttf",
  display: "swap",
});

const fonia = localFont({
  src: "../public/fonts/fonia.ttf",
  variable: "--font-fonia",
  display: "swap",
});

export const metadata = {
  title: "Qwickrepair Solutions",
  description: "Home repair services in Bengaluru",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${fonia.variable}`}>{children}</body>
    </html>
  );
}
