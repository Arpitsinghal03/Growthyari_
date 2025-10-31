import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'program', label: 'Program' },
    { id: 'mentors', label: 'Mentors' },
    { id: 'investors', label: 'Investors' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: '0 4px 20px 0 rgba(61, 117, 81, 0.08)',
      borderBottom: '1px solid rgba(93, 217, 193, 0.15)',
      zIndex: 50,
      transition: 'all 0.3s ease'
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
          {/* Logo */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              gap: '0.75rem'
            }}
            onClick={() => setCurrentPage('home')}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
              padding: '8px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)'
            }}>
              <img 
                src="/logo.jpg" 
                alt="GrowthYari Logo"
                style={{
                  width: '26px',
                  height: '26px',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
            </div>
            <span style={{
              fontSize: '1.4rem',
              fontWeight: '700',
              color: '#2C5F3F',
              letterSpacing: '-0.5px'
            }}>
              GrowthYari
            </span>
          </div>

          {/* Desktop Menu */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem'
            }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    color: currentPage === item.id ? '#2C5F3F' : '#5A8F6A',
                    background: currentPage === item.id ? 'rgba(93, 217, 193, 0.15)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    position: 'relative',
                    letterSpacing: '0.3px'
                  }}
                  onMouseOver={(e) => {
                    if (currentPage !== item.id) {
                      e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                      e.target.style.color = '#3D7551';
                      e.target.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (currentPage !== item.id) {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#5A8F6A';
                      e.target.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '60%',
                      height: '3px',
                      background: 'linear-gradient(90deg, #3D7551 0%, #5DD9C1 100%)',
                      borderRadius: '10px'
                    }} />
                  )}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(user ? 'dashboard' : 'login')}
                style={{
                  background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                  color: 'white',
                  padding: '0.65rem 1.75rem',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                  marginLeft: '0.5rem',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(61, 117, 81, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.3)';
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
                  ? 'rgba(93, 217, 193, 0.15)' 
                  : 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
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
          maxHeight: mobileMenuOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderTop: mobileMenuOpen ? '1px solid rgba(93, 217, 193, 0.2)' : 'none'
        }}>
          <div style={{ padding: '1rem' }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '1rem 1.25rem',
                  margin: '0.25rem 0',
                  color: currentPage === item.id ? '#2C5F3F' : '#5A8F6A',
                  background: currentPage === item.id ? 'rgba(93, 217, 193, 0.15)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '10px',
                  fontWeight: currentPage === item.id ? '600' : '500',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.3px'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                  e.target.style.paddingLeft = '1.5rem';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = currentPage === item.id 
                    ? 'rgba(93, 217, 193, 0.15)' 
                    : 'transparent';
                  e.target.style.paddingLeft = '1.25rem';
                }}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => {
                setCurrentPage(user ? 'dashboard' : 'login');
                setMobileMenuOpen(false);
              }}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                color: 'white',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '1rem',
                marginTop: '0.75rem',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px'
              }}
            >
              {user ? 'Dashboard' : 'Apply Now'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;