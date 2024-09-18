import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Common/Navbar.js'; // Your Navbar component
import Footer from './components/Common/Footer.js'; // Your Footer component
import HomePage from './Pages/HomePage'; // Home Page Component
import AboutMaitriRun from './Pages/AboutMaitriRun'; // About Maitri Run
import Organizers from './Pages/Organizers.js'; // Organizers Page
import MaitriFoundation from './Pages/MaitriFoundation'; // Maitri Foundation Page
import Sponsors from './Pages/Sponsors'; // Sponsors Page
import RaceRegistration from './Pages/RaceRegistration'; // Registration Page
import Medals from './Pages/Medals'; // Medals Page
import PrizesCategories from './Pages/PrizesCategories'; // Prizes and Categories
import Venue from './Pages/Venue'; // Venue Page
import RoutePage from './Pages/RoutePage'; // Route Page
import Rules from './Pages/Rules'; // Rules Page
import FAQs from './Pages/FAQs'; // FAQs Page
import PastEditions from './Pages/PastEditions'; // Past Editions Page
import ContactUs from './Pages/ContactUs'; // Contact Us Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* About Pages */}
        <Route path="/about-maitri-run" element={<AboutMaitriRun />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/maitri-foundation" element={<MaitriFoundation />} />
        <Route path="/sponsors" element={<Sponsors />} />

        {/* Race Details Pages */}
        <Route path="/registration" element={<RaceRegistration />} />
        <Route path="/medals" element={<Medals />} />
        <Route path="/prizes-categories" element={<PrizesCategories />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/route" element={<RoutePage />} />
        <Route path="/rules" element={<Rules />} />

        {/* Other Pages */}
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/past-editions" element={<PastEditions />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
