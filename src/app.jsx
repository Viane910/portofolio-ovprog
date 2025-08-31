import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './script/pages/home/home-page.jsx';
import AboutPage from './script/pages/about/about-page.jsx';
import PortofolioPage from './script/pages/portofolio/portofolio.jsx';
import ContactPage from './script/pages/contact/contact-page.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
