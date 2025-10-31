import React from 'react';
import { Rocket, Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

function Footer({ setCurrentPage }) {
  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, #2C5F3F 0%, #1A3829 100%)', 
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'rgba(93, 217, 193, 0.1)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        left: '-50px',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 182, 217, 0.08)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }}></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem 2rem', position: 'relative', zIndex: 1 }}>
        {/* Newsletter Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          padding: '3rem',
          borderRadius: '20px',
          marginBottom: '4rem',
          border: '1px solid rgba(93, 217, 193, 0.2)',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            letterSpacing: '-0.5px'
          }}>
            🚀 Join 30,000+ Founders
          </h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.85)', 
            marginBottom: '2rem',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Get exclusive insights, founder stories, and early access to our programs
          </p>
          <div style={{ 
            display: 'flex', 
            gap: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                border: '2px solid rgba(93, 217, 193, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#5DD9C1';
                e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, #5DD9C1 0%, #3DB89E 100%)',
              color: '#1A3829',
              padding: '1rem 2rem',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '1rem',
              transition: 'all 0.3s',
              boxShadow: '0 4px 15px rgba(93, 217, 193, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(93, 217, 193, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(93, 217, 193, 0.3)';
            }}
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div style={{ 
          display: 'grid',
          gap: '3rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          marginBottom: '3rem'
        }}>
          {/* Brand Section */}
          <div style={{ maxWidth: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #5DD9C1 0%, #3DB89E 100%)',
                padding: '10px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem',
                boxShadow: '0 4px 15px rgba(93, 217, 193, 0.3)'
              }}>
                <Rocket style={{ width: '24px', height: '24px', color: '#1A3829' }} />
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>GrowthYari</span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '1.05rem' }}>
              Where vision turns into valuation. India's most execution-focused founder accelerator building category-defining companies.
            </p>
            
            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                <Mail size={18} style={{ color: '#5DD9C1' }} />
                <span style={{ fontSize: '0.95rem' }}>hello@growthyari.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                <Phone size={18} style={{ color: '#5DD9C1' }} />
                <span style={{ fontSize: '0.95rem' }}>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255, 255, 255, 0.85)' }}>
                <MapPin size={18} style={{ color: '#5DD9C1', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ fontSize: '0.95rem' }}>Bangalore, Mumbai, Delhi, Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Program Links */}
          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '0.5px' }}>Program</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
              {[
                { label: '8-Week Accelerator', page: 'program' },
                { label: 'Mentorship', page: 'mentors' },
                { label: 'Investor Network', page: 'investors' },
                { label: 'Founder Community', page: 'community' },
                { label: 'Success Stories', page: 'home' },
                { label: 'Application Process', page: 'login' }
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => setCurrentPage(item.page)} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s', 
                      textAlign: 'left',
                      padding: '0',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }} 
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#5DD9C1';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    → {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '0.5px' }}>Company</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
              {[
                { label: 'About Us', page: 'home' },
                { label: 'How It Works', page: 'program' },
                { label: 'Our Team', page: 'home' },
                { label: 'Careers', page: 'home' },
                { label: 'Blog & Resources', page: 'home' },
                { label: 'Contact Us', page: 'contact' }
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    onClick={() => setCurrentPage(item.page)} 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s', 
                      textAlign: 'left',
                      padding: '0',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }} 
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#5DD9C1';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    → {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 style={{ fontWeight: '700', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '0.5px' }}>Legal & Social</h3>
            
            {/* Legal Links */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Refund Policy'
              ].map((item, i) => (
                <li key={i}>
                  <button 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.75)', 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer', 
                      transition: 'all 0.3s', 
                      textAlign: 'left',
                      padding: '0',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }} 
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#5DD9C1';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    → {item}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.85)', fontWeight: '600' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: <Twitter size={20} />, name: 'Twitter' },
                  { icon: <Linkedin size={20} />, name: 'LinkedIn' },
                  { icon: <Instagram size={20} />, name: 'Instagram' },
                  { icon: <Youtube size={20} />, name: 'YouTube' }
                ].map((social, i) => (
                  <button 
                    key={i} 
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(93, 217, 193, 0.2)',
                      color: 'white',
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#5DD9C1';
                      e.currentTarget.style.color = '#1A3829';
                      e.currentTarget.style.borderColor = '#5DD9C1';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.2)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(93, 217, 193, 0.2)', 
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.95rem' }}>
            &copy; {new Date().getFullYear()} GrowthYari. All rights reserved. Built with 💚 in India.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🌱 Carbon Neutral
            </span>
            <span style={{ 
              color: 'rgba(255, 255, 255, 0.7)', 
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🔒 Secure & Private
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
