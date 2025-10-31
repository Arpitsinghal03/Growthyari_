import React from 'react';
import { ChevronRight, Users, Target, Network, Check, X, Star, Zap, Rocket, ArrowRight } from 'lucide-react';
import { weeklyProgram, testimonials } from '../components/common/data';

function HomePage({ setCurrentPage }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Enhanced Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #FFB6D9 0%, #D8E6D2 100%)'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(93, 217, 193, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        {/* Left Side - Enhanced Rocket Animation */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '2rem',
          zIndex: 2
        }}>
          <div style={{
            position: 'relative',
            width: '400px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Enhanced Rocket with Animation */}
            <div style={{
              width: '120px',
              height: '180px',
              background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
              borderRadius: '60px 60px 15px 15px',
              position: 'relative',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              transform: 'translateY(0)',
              animation: 'float 6s ease-in-out infinite'
            }}>
              {/* Window */}
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #4A9FD8 0%, #2C5F3F 100%)',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 0 20px rgba(74, 159, 216, 0.5)'
              }}></div>
              
              {/* Fins */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '-30px',
                width: '0',
                height: '0',
                borderLeft: '30px solid transparent',
                borderRight: '30px solid transparent',
                borderBottom: '60px solid #FF85B3',
                transform: 'rotate(-5deg)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-30px',
                width: '0',
                height: '0',
                borderLeft: '30px solid transparent',
                borderRight: '30px solid transparent',
                borderBottom: '60px solid #FF85B3',
                transform: 'rotate(5deg)'
              }}></div>
            </div>
            
            {/* Enhanced Rocket Flame */}
            <div style={{
              marginTop: '10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 2
            }}>
              <div style={{
                width: '40px',
                height: '60px',
                background: 'linear-gradient(180deg, #FFE97F 0%, #FFD54F 30%, #FF6B6B 100%)',
                borderRadius: '50% 50% 20% 20%',
                animation: 'flicker 0.8s infinite alternate, pulse 2s infinite',
                filter: 'blur(1px)',
                boxShadow: '0 0 30px rgba(255, 213, 79, 0.6)'
              }}></div>
            </div>

            {/* Enhanced Clouds */}
            <div style={{
              position: 'absolute',
              bottom: '50px',
              left: '-30px',
              display: 'flex',
              gap: '20px',
              zIndex: 1
            }}>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{
                  width: `${60 + i * 20}px`,
                  height: `${25 + i * 10}px`,
                  background: `rgba(${i === 1 ? '168, 230, 225' : i === 2 ? '232, 180, 217' : '135, 206, 235'}, ${0.6 + i * 0.1})`,
                  borderRadius: '50%',
                  animation: `floatCloud ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
                  filter: 'blur(2px)'
                }}></div>
              ))}
            </div>

            {/* Launch Platform */}
            <div style={{
              width: '220px',
              height: '60px',
              background: 'linear-gradient(90deg, #5DD9C1 0%, #42B8A0 100%)',
              borderRadius: '50%',
              marginTop: '60px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 2
            }}></div>
          </div>
        </div>

        {/* Right Side - Enhanced Content */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          padding: '3rem',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            position: 'relative'
          }}>
            {/* Enhanced Logo Section */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '3rem',
              gap: '1rem',
              animation: 'slideInRight 1s ease-out'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2C5F3F 0%, #3D7551 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(44, 95, 63, 0.4)',
                transform: 'rotate(45deg)'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  color: 'white',
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  transform: 'rotate(-45deg)'
                }}>GY</div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideInRight 1s ease-out 0.2s both'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#2C5F3F',
                  letterSpacing: '3px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>GROWTHYARI</div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#3D7551',
                  letterSpacing: '4px',
                  marginTop: '2px',
                  background: 'linear-gradient(90deg, #3D7551, #5DD9C1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>ACCELERATOR</div>
              </div>
            </div>

            {/* Enhanced Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              color: '#2C5F3F',
              lineHeight: 1.1,
              marginBottom: '2rem',
              letterSpacing: '-1px',
              animation: 'slideInRight 1s ease-out 0.4s both'
            }}>
              Where Vision<br />
              Turns Into<br />
              <span style={{
                background: 'linear-gradient(135deg, #2C5F3F 0%, #5DD9C1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 8px rgba(93, 217, 193, 0.3)'
              }}>Valuation</span>
            </h1>

            {/* Enhanced Subheading */}
            <p style={{
              fontSize: '1.25rem',
              color: '#3D7551',
              marginBottom: '2rem',
              lineHeight: 1.6,
              fontWeight: '600',
              animation: 'slideInRight 1s ease-out 0.6s both'
            }}>
              India's Most Selective Founder Accelerator for Visionaries Building Category Kings.
            </p>

            {/* Enhanced Quote */}
            <div style={{
              borderLeft: '4px solid #5DD9C1',
              paddingLeft: '1.5rem',
              marginBottom: '2.5rem',
              animation: 'slideInRight 1s ease-out 0.8s both'
            }}>
              <p style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: '#2C5F3F',
                fontWeight: '600',
                textShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                "Unleashing Founders Who Build the Future."
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              animation: 'slideInRight 1s ease-out 1s both'
            }}>
              <button 
                onClick={() => setCurrentPage('login')}
                style={{
                  background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                  color: 'white',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 8px 25px rgba(61, 117, 81, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(61, 117, 81, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(61, 117, 81, 0.4)';
                }}
              >
                <span>Apply for Cohort</span>
                <ChevronRight size={20} style={{ transition: 'transform 0.3s' }} />
              </button>
              
              <button 
                onClick={() => setCurrentPage('program')}
                style={{
                  background: 'transparent',
                  color: '#2C5F3F',
                  padding: '1.25rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  border: '3px solid #2C5F3F',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#2C5F3F';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(44, 95, 63, 0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#2C5F3F';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View Program
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Animations */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(1deg); }
          }
          @keyframes flicker {
            0% { opacity: 1; transform: scaleY(1) scaleX(1); }
            100% { opacity: 0.8; transform: scaleY(1.1) scaleX(0.9); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          @keyframes floatCloud {
            0%, 100% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(20px) translateY(-10px); }
          }
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @media (max-width: 768px) {
            section > div:first-child {
              display: none !important;
            }
            section > div:last-child {
              flex: 1;
            }
          }
        `}</style>
      </section>

      {/* Enhanced Stats Section */}
      <section style={{ 
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #F5F9F3 0%, #E8F5E9 100%)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(93, 217, 193, 0.1) 0%, transparent 50%)'
        }}></div>
        
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {[
            { value: '30,000+', label: 'Community Members', icon: <Users size={32} /> },
            { value: '700+', label: 'Event Participants', icon: <Zap size={32} /> },
            { value: '20+', label: 'Strategic Partners', icon: <Network size={32} /> },
            { value: '4', label: 'Cities', icon: <Target size={32} /> },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '3rem 2rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              boxShadow: '0 8px 32px rgba(61, 117, 81, 0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.25)';
            }}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
            >
              <div style={{
                color: '#5DD9C1',
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center'
              }}>{stat.icon}</div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: 'bold', 
                color: '#2C5F3F',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #2C5F3F, #5DD9C1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{stat.value}</div>
              <div style={{ 
                color: '#5A8F6A',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the sections with similar enhancements... */}

      {/* Enhanced Differentiator Section */}
      <section style={{ padding: '6rem 2rem', background: 'white', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #5DD9C1, transparent)'
        }}></div>
        
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '4rem',
            color: '#2C5F3F',
            position: 'relative'
          }}>
            The <span style={{ 
              background: 'linear-gradient(135deg, #5DD9C1, #2C5F3F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>GrowthYari</span> Difference
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '4px',
              background: 'linear-gradient(90deg, #5DD9C1, #2C5F3F)',
              borderRadius: '2px'
            }}></div>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gap: '2.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {[
              { 
                icon: <Users size={48} />,
                title: 'Curated Inner Circle',
                others: 'Generic online groups',
                growthyari: 'Hand-picked founder community'
              },
              {
                icon: <Target size={48} />,
                title: 'Execution-Focused',
                others: 'Theoretical sessions',
                growthyari: 'Investor-backed guidance'
              },
              {
                icon: <Network size={48} />,
                title: 'Real Connections',
                others: 'Pitch practice',
                growthyari: 'Warm investor intros'
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, rgba(232, 245, 233, 0.8) 0%, rgba(216, 230, 210, 0.8) 100%)',
                padding: '3rem 2.5rem',
                borderRadius: '25px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 32px rgba(61, 117, 81, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(61, 117, 81, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(61, 117, 81, 0.15)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, rgba(93, 217, 193, 0.1) 0%, transparent 50%)',
                  borderRadius: '0 25px 0 100px'
                }}></div>
                
                <div style={{ 
                  marginBottom: '2rem',
                  color: '#2C5F3F'
                }}>{item.icon}</div>
                
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 'bold', 
                  marginBottom: '2rem', 
                  color: '#2C5F3F',
                  position: 'relative'
                }}>
                  {item.title}
                  <div style={{
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '40px',
                    height: '3px',
                    background: '#5DD9C1',
                    borderRadius: '2px'
                  }}></div>
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <X style={{ 
                      width: '1.75rem', 
                      height: '1.75rem', 
                      color: '#ef4444', 
                      marginRight: '1rem', 
                      flexShrink: 0, 
                      marginTop: '2px' 
                    }} />
                    <span style={{ 
                      color: '#6b7280', 
                      textDecoration: 'line-through', 
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}>{item.others}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <Check style={{ 
                      width: '1.75rem', 
                      height: '1.75rem', 
                      color: '#2C5F3F', 
                      marginRight: '1rem', 
                      flexShrink: 0, 
                      marginTop: '2px' 
                    }} />
                    <span style={{ 
                      color: '#2C5F3F', 
                      fontWeight: '700', 
                      fontSize: '1.1rem' 
                    }}>{item.growthyari}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(135deg, #F5F9F3 0%, #E8F5E9 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '4rem',
            color: '#2C5F3F',
            position: 'relative'
          }}>
            Your 8-Week Journey
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #5DD9C1, #2C5F3F)',
              borderRadius: '2px'
            }}></div>
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '2.5rem',
            position: 'relative'
          }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '60px',
              top: '0',
              bottom: '0',
              width: '4px',
              background: 'linear-gradient(180deg, #5DD9C1, #2C5F3F)',
              borderRadius: '2px',
              zIndex: 1
            }}></div>

            {weeklyProgram.map((phase, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '3rem',
                borderRadius: '25px',
                boxShadow: '0 8px 32px rgba(61, 117, 81, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                zIndex: 2,
                marginLeft: '120px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(61, 117, 81, 0.15)';
              }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '2rem',
                  position: 'relative'
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-150px',
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    boxShadow: '0 8px 25px rgba(61, 117, 81, 0.4)',
                    border: '4px solid white'
                  }}>
                    W{phase.week}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '2rem', 
                    fontWeight: 'bold', 
                    color: '#2C5F3F',
                    background: 'linear-gradient(135deg, #2C5F3F, #5DD9C1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>{phase.title}</h3>
                </div>
                
                <div style={{ 
                  display: 'grid',
                  gap: '1.5rem',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
                }}>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start',
                      padding: '1rem',
                      background: 'rgba(93, 217, 193, 0.1)',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(93, 217, 193, 0.2)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(93, 217, 193, 0.1)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    >
                      <Check style={{ 
                        width: '1.5rem', 
                        height: '1.5rem', 
                        color: '#2C5F3F', 
                        marginRight: '1rem', 
                        flexShrink: 0, 
                        marginTop: '2px' 
                      }} />
                      <span style={{ 
                        color: '#2C5F3F', 
                        fontSize: '1.1rem',
                        fontWeight: '500'
                      }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue with similar enhancements for Testimonials and Pricing sections... */}
    </div>
  );
}

export default HomePage;