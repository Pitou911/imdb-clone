import Header from "@/components/Header";
import "./globals.css";
import Head from "./head";
import Providers from "./Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head />
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* NavBar */}
          <Navbar />
          {/* SearchBox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
