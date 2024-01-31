import { Poppins } from "next/font/google";
// import "../../styles/globals.module.css";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import AboutHero from "../sections/AboutHero";
import BlogSection from "../sections/BlogSection";
import Head from "next/head";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "800"],
});
export const metadata: Metadata = {
  title: "Blog - AiFy",
};
export default function Blog() {
  return (
    <main className={poppins.className}>
      <div>
        <AboutHero />
      </div>

      <div>
        <BlogSection />
      </div>
    </main>
  );
}
