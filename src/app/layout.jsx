import localFont from "next/font/local";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import CartProvider from "./contexts/cartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Prife Lang'ata",
  description: "Achieve the Prime of your Life through our innovative health and wellness solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
