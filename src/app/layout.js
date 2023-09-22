import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Blog97",
  description: "A Full Stack Blog App with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <AuthProvider>
                  <Navbar />
                  {children}
                  <Footer />
                </AuthProvider>
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
