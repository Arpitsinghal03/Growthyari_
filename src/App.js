import React, { useState } from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import AIChatBox from './components/AIChatBox.js';
import HomePage from './pages/HomePage.js';
import ProgramPage from './pages/ProgramPage.js';
import MentorsPage from './pages/MentorsPage.js';
import InvestorsPage from './pages/InvestorsPage.js';
import CommunityPage from './pages/CommunityPage.js';
import DashboardPage from './pages/DashboardPage.js';
import LoginPage from './pages/LoginPage.js';
import ContactPage from './pages/ContactPage.js';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAIChat, setShowAIChat] = useState(false);

  const pages = {
    home: <HomePage setCurrentPage={setCurrentPage} />,
    program: <ProgramPage setCurrentPage={setCurrentPage} />,
    mentors: <MentorsPage />,
    investors: <InvestorsPage />,
    community: <CommunityPage setCurrentPage={setCurrentPage} />,
    dashboard: <DashboardPage setShowAIChat={setShowAIChat} />,
    login: <LoginPage setUser={setUser} setCurrentPage={setCurrentPage} />,
    contact: <ContactPage />,
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #c7d2fe 100%)'
    }}>
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        user={user}
      />
      
      <main style={{ paddingTop: '64px' }}>
        {pages[currentPage]}
      </main>

      {showAIChat && <AIChatBox setShowAIChat={setShowAIChat} />}
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}