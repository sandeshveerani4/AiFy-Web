import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./sections/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AiFy",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D9D8FHXVNY"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-D9D8FHXVNY');`}
        </Script>
      </head>
      <body className={`bg-amber-50 text-black ` + inter.className}>
        <div id="fb-root"></div>

        <div id="fb-customer-chat" className="fb-customerchat"></div>

        <Script id="msg-1" strategy="lazyOnload">
          {`var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "112444918393835");
chatbox.setAttribute("attribution", "biz_inbox");
`}
        </Script>
        <Script id="msg-2" strategy="lazyOnload">
          {`window.fbAsyncInit = function() {
FB.init({
  xfbml            : true,
  version          : 'v16.0'
});
};

(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));`}
        </Script>
        <ScrollToTop />
        <Navbar
          color="text-black"
          src="\logo_black.svg"
          main={"black"}
          hover={"gray-600"}
          textMain={"white"}
          textHover={"text-color"}
        />
        {children}
        <Footer
          textMain={"black"}
          bgMain={"white"}
          bgHover={"gray-600"}
          textHover={"white"}
        />
      </body>
    </html>
  );
}
