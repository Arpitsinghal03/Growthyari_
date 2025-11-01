import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

// Custom hook for window size
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function Navbar({ currentPage, setCurrentPage, mobileMenuOpen, setMobileMenuOpen, user }) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'program', label: 'Program' },
    { id: 'partners', label: 'Partners' },
    { id: 'events', label: 'Events', },
    { id: 'community', label: 'Community',  },
  ];

  const isScrolled = scrollPosition > 10;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: isScrolled 
        ? '0 8px 32px rgba(61, 117, 81, 0.12)' 
        : '0 4px 20px rgba(61, 117, 81, 0.08)',
      borderBottom: '1px solid rgba(93, 217, 193, 0.15)',
      zIndex: 50,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px'
        }}>
          {/* Logo Section */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              gap: '0.75rem',
              position: 'relative'
            }}
            onClick={() => setCurrentPage('home')}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Logo without green box */}
            <div style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/logo.jpg" 
                alt="GrowthYari Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain',
                  borderRadius: '8px',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </div>

            {/* Brand Text */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontSize: '1.35rem',
                fontWeight: '800',
                color: '#2C5F3F',
                letterSpacing: '-0.5px',
                background: 'linear-gradient(135deg, #3D7551 0%, #5DD9C1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                GrowthYari
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                color: '#5DD9C1',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                opacity: 0.7
              }}>
                Accelerator
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.25rem'
            }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    color: currentPage === item.id 
                      ? '#2C5F3F' 
                      : hoveredItem === item.id 
                      ? '#3D7551'
                      : '#5A8F6A',
                    background: currentPage === item.id 
                      ? 'linear-gradient(135deg, rgba(93, 217, 193, 0.2), rgba(93, 217, 193, 0.1))' 
                      : hoveredItem === item.id
                      ? 'rgba(93, 217, 193, 0.12)'
                      : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    letterSpacing: '0.3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span style={{
                    fontSize: '1rem',
                    opacity: hoveredItem === item.id ? 1 : 0.7,
                    transition: 'all 0.3s'
                  }}>
                    {item.icon}
                  </span>
                  {item.label}
                  
                  {/* Active indicator with animation */}
                  {currentPage === item.id && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '70%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #3D7551 0%, #5DD9C1 100%)',
                      borderRadius: '10px',
                      boxShadow: '0 2px 8px rgba(61, 117, 81, 0.3)',
                      animation: 'slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }} />
                  )}
                </button>
              ))}
              
              {/* Apply/Dashboard Button */}
              <button
                onClick={() => setCurrentPage(user ? 'dashboard' : 'login')}
                style={{
                  background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                  marginLeft: '1rem',
                  letterSpacing: '0.3px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(61, 117, 81, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.3)';
                }}
              >
                
                {user ? 'Dashboard' : 'Apply Now'}
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              style={{ 
                background: mobileMenuOpen 
                  ? 'linear-gradient(135deg, rgba(93, 217, 193, 0.2), rgba(93, 217, 193, 0.1))' 
                  : 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen 
                ? <X style={{ color: '#3D7551', width: '28px', height: '28px' }} />
                : <Menu style={{ color: '#5A8F6A', width: '28px', height: '28px' }} />
              }
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div style={{
          maxHeight: mobileMenuOpen ? '600px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: mobileMenuOpen ? '1px solid rgba(93, 217, 193, 0.2)' : 'none'
        }}>
          <div style={{ padding: '1rem' }}>
            {/* Mobile Nav Items */}
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.25rem 1.5rem',
                  margin: '0.25rem 0',
                  color: currentPage === item.id ? '#2C5F3F' : '#5A8F6A',
                  background: currentPage === item.id 
                    ? 'linear-gradient(135deg, rgba(93, 217, 193, 0.15), rgba(93, 217, 193, 0.08))' 
                    : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '12px',
                  fontWeight: currentPage === item.id ? '700' : '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  letterSpacing: '0.3px',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = currentPage === item.id
                    ? 'linear-gradient(135deg, rgba(93, 217, 193, 0.15), rgba(93, 217, 193, 0.08))'
                    : 'rgba(93, 217, 193, 0.1)';
                  e.currentTarget.style.paddingLeft = '2rem';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = currentPage === item.id 
                    ? 'linear-gradient(135deg, rgba(93, 217, 193, 0.15), rgba(93, 217, 193, 0.08))' 
                    : 'transparent';
                  e.currentTarget.style.paddingLeft = '1.5rem';
                }}
              >
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <span>{item.label}</span>
                {currentPage === item.id && (
                  <div style={{
                    marginLeft: 'auto',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#5DD9C1',
                    boxShadow: '0 0 12px rgba(93, 217, 193, 0.6)'
                  }} />
                )}
              </button>
            ))}
            
            {/* Mobile CTA Button */}
            <button
              onClick={() => {
                setCurrentPage(user ? 'dashboard' : 'login');
                setMobileMenuOpen(false);
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                color: 'white',
                padding: '1.25rem 1.5rem',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '1.05rem',
                marginTop: '1rem',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Sparkles size={18} />
              {user ? 'Dashboard' : 'Apply Now'}
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 70%;
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(93, 217, 193, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(93, 217, 193, 0);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;