import React, { useState } from 'react';
import { Rocket, Check, Users, TrendingUp, Award, Zap } from 'lucide-react';

function LoginPage({ setUser, setCurrentPage }) {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - in real app, this would validate credentials
    setUser({
      name: "Founder Name",
      email: "founder@startup.com",
      role: "founder"
    });
    setCurrentPage('dashboard');
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex',
      background: '#F5F9F3'
    }}>
      {/* Left Side - Content Section */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'rgba(93, 217, 193, 0.1)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '350px',
          height: '350px',
          background: 'rgba(255, 182, 217, 0.08)',
          borderRadius: '50%',
          filter: 'blur(70px)'
        }}></div>

        <div style={{ maxWidth: '500px', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: 'rgba(93, 217, 193, 0.2)',
              padding: '1rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <Rocket size={40} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                GrowthYari
              </div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                Accelerator Program
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            Transform Your Startup in 8 Weeks
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}>
            Join India&apos;s most selective founder accelerator. Get mentorship, investor intros, and a lifetime community of ambitious builders.
          </p>

          {/* Benefits List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { icon: <Users size={20} />, text: '50+ Expert Mentors' },
              { icon: <TrendingUp size={20} />, text: '10+ Warm Investor Intros' },
              { icon: <Award size={20} />, text: 'Lifetime Community Access' },
              { icon: <Zap size={20} />, text: 'Money-Back Guarantee' }
            ].map((benefit, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(93, 217, 193, 0.2)',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  {benefit.icon}
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            {[
              { value: '30K+', label: 'Members' },
              { value: '₹500Cr+', label: 'Raised' },
              { value: '4', label: 'Cities' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'white'
      }}>
        <div style={{ 
          maxWidth: '450px', 
          width: '100%'
        }}>
          {/* Form Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#2C5F3F'
            }}>
              {isLogin ? 'Welcome Back' : 'Start Your Journey'}
            </h2>
            <p style={{ 
              color: '#5A8F6A',
              fontSize: '1.05rem'
            }}>
              {isLogin 
                ? 'Sign in to access your founder dashboard' 
                : 'Apply for the next cohort and transform your startup'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {!isLogin && (
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.95rem', 
                  fontWeight: '600', 
                  color: '#2C5F3F', 
                  marginBottom: '0.5rem' 
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '2px solid rgba(93, 217, 193, 0.3)',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    fontSize: '1rem',
                    color: '#2C5F3F',
                    background: 'rgba(93, 217, 193, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3D7551';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 3px rgba(61, 117, 81, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                    e.target.style.background = 'rgba(93, 217, 193, 0.05)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your full name"
                />
              </div>
            )}
            
            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.95rem', 
                fontWeight: '600', 
                color: '#2C5F3F', 
                marginBottom: '0.5rem' 
              }}>
                Email Address
              </label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                  color: '#2C5F3F',
                  background: 'rgba(93, 217, 193, 0.05)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3D7551';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 3px rgba(61, 117, 81, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  e.target.style.background = 'rgba(93, 217, 193, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="you@startup.com"
              />
            </div>

            <div>
              <label style={{ 
                display: 'block', 
                fontSize: '0.95rem', 
                fontWeight: '600', 
                color: '#2C5F3F', 
                marginBottom: '0.5rem' 
              }}>
                Password
              </label>
              <input
                type="password"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  borderRadius: '12px',
                  outline: 'none',
                  transition: 'all 0.2s',
                  fontSize: '1rem',
                  color: '#2C5F3F',
                  background: 'rgba(93, 217, 193, 0.05)'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3D7551';
                  e.target.style.background = 'white';
                  e.target.style.boxShadow = '0 0 0 3px rgba(61, 117, 81, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  e.target.style.background = 'rgba(93, 217, 193, 0.05)';
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="••••••••"
              />
            </div>

            {!isLogin && (
              <div>
                <label style={{ 
                  display: 'block', 
                  fontSize: '0.95rem', 
                  fontWeight: '600', 
                  color: '#2C5F3F', 
                  marginBottom: '0.5rem' 
                }}>
                  Startup Name
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '2px solid rgba(93, 217, 193, 0.3)',
                    borderRadius: '12px',
                    outline: 'none',
                    transition: 'all 0.2s',
                    fontSize: '1rem',
                    color: '#2C5F3F',
                    background: 'rgba(93, 217, 193, 0.05)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3D7551';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 3px rgba(61, 117, 81, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                    e.target.style.background = 'rgba(93, 217, 193, 0.05)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your startup name"
                />
              </div>
            )}

            {isLogin && (
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  style={{
                    color: '#3D7551',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#2C5F3F'}
                  onMouseOut={(e) => e.target.style.color = '#3D7551'}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                color: 'white',
                padding: '1rem 0',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.05rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 8px 20px rgba(61, 117, 81, 0.3)',
                marginTop: '0.5rem'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 30px rgba(61, 117, 81, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 20px rgba(61, 117, 81, 0.3)';
              }}
            >
              {isLogin ? 'Sign In to Dashboard' : 'Apply to Accelerator'}
            </button>
          </form>

          {/* Divider */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            margin: '2rem 0',
            gap: '1rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(93, 217, 193, 0.3)' }}></div>
            <span style={{ color: '#5A8F6A', fontSize: '0.9rem' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(93, 217, 193, 0.3)' }}></div>
          </div>

          {/* Toggle Form */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#5A8F6A', marginBottom: '0.75rem' }}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              style={{
                color: '#3D7551',
                fontWeight: '600',
                fontSize: '1.05rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#2C5F3F';
                e.target.style.textDecorationColor = '#5DD9C1';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#3D7551';
                e.target.style.textDecorationColor = '#3D7551';
              }}
            >
              {isLogin ? 'Apply Now' : 'Sign In'}
            </button>
          </div>

          {/* Trust Badge */}
          {!isLogin && (
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'rgba(93, 217, 193, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(93, 217, 193, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#2C5F3F',
                fontWeight: '500'
              }}>
                🎯 <strong>Results Guaranteed:</strong> Refund if no 10 founder or 3 investor intros in 8 weeks
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Responsive Mobile View */}
      <style>{`
        @media (max-width: 968px) {
          div:first-child {
            flex-direction: column;
          }
          div:first-child > div:first-child {
            padding: 3rem 2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default LoginPage;
