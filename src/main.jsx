import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages";
import FAQ from "./pages/faq";
import ContactPage from "./pages/contactpages";
import Lowtahun from "./pages/low/lowtahun";
import Kategori24 from "./pages/low/2024/kategori24";
import Kategori25 from "./pages/low/2025/kategori25";
import Kategori26 from "./pages/low/2026/kategori26";
import Jenjangonl25 from "./pages/low/2025/jenjangonl25";
import Jenjangoff25 from "./pages/low/2025/jenjangoff25";
import Jenjangonl26 from "./pages/low/2026/jenjangonl26";
import Jenjangoff26 from "./pages/low/2026/jenjangoff26";
import HomeRegist from "./pages/registration/homeregist";
import Thankyouinter from "./pages/registration/thankyouinter";
// import ContactPage from "./pages/contactpages";
// import Faq from "./pages/faq";
// import PosterPage from "./pages/posterlayoutpages";
import ListNews from "./pages/news/listnews";
import Cert2026 from "./pages/certificate/cert2026";

/*
 * Formulir lama (Google Apps Script) /homeindo, /homeinter, /indo-*, /inter-*
 * dialihkan ke /homeregist: pendaftaran kini lewat formulir dasbor IYSA.
 * Berkas halamannya tetap ada di src/pages/registration bila perlu dirujuk.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/faq",
    element: <FAQ />
  },
  {
    path: "/contact",
    element: <ContactPage />
  },
  {
    path: "/lowtahun",
    element: <Lowtahun />
  },
  {
    path: "/kategori24",
    element: <Kategori24 />
  },
  {
    path: "/kategori25",
    element: <Kategori25 />
  },
  {
    path: "/kategori26",
    element: <Kategori26 />
  },
  {
    path: "/jenjangonl25",
    element: <Jenjangonl25 />
  },
  {
    path: "/jenjangonl26",
    element: <Jenjangonl26 />
  },
  {
    path: "/jenjangoff25",
    element: <Jenjangoff25 />
  },
  {
    path: "/jenjangoff26",
    element: <Jenjangoff26 />
  },
  {
    path: "/listnews",
    element: <ListNews />
  },
  {
    path: "/homeregist",
    element: <HomeRegist />
  },
  {
    path: "/homeindo",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/homeinter",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/indo-offline",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/indo-online",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/inter-offline",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/inter-online",
    element: <Navigate to="/homeregist" replace />
  },
  {
    path: "/thankyouinter",
    element: <Thankyouinter />
  },
  {
    path: "/cert2026",
    element: <Cert2026 />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
