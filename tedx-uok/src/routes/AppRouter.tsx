import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import SpeakersPage from "../pages/Speakers/SpeakersPage";
import TeamPage from "../pages/Team/TeamPage";
import PartnersPage from "../pages/Partners/PartnersPage";
import ContactPage from "../pages/Contact/ContactPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
