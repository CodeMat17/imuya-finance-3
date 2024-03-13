import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMUYA FINANCE PORTAL",
  description:
    "This is the official IMUYA finance portal. Our online finance database.",
  openGraph: {
    title: "IMUYA FINANCE PORTAL",
    description:
      "This is the official IMUYA finance portal. Our online finance database.",
    author: ["Matthew Chukwu"],
    developer: ["Matthew Chukwu"],
    url: "https://imuya-finance.vercel.app",
    siteName: "IMUYA Finance",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1652614881/imuya/image.png",
        width: 600,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1652614881/imuya/image.png",
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
