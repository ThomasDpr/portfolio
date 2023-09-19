import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"
import { ScrollToTop } from "../ScrollToTop/ScrollToTop"
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <main className="page">{children}</main>
      <Footer />
    </div>
  )
}
