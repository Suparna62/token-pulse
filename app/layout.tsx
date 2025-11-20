import "./globals.css";
import Providers from "./providers";
import Header from "../components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0c0d] text-white min-h-screen">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
