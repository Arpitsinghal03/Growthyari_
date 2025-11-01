import React, { useState } from 'react';
import { ArrowRight, Zap, Check, Target, Users, Lightbulb, TrendingUp, Award, Rocket, CheckCircle2, Sparkles } from 'lucide-react';
import { weeklyProgram } from '../components/common/data';

function ProgramPage({ setCurrentPage }) {
  const [expandedWeek, setExpandedWeek] = useState(null);

  return (
    <div style={{ background: '#F5F9F3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '7rem 2rem 5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'rgba(93, 217, 193, 0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'rgba(255, 182, 217, 0.08)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            animation: 'slideInDown 0.6s ease-out'
          }}>
            <span style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '2px' }}>
              ⚡ 8-WEEK INTENSIVE PROGRAM
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', 
            fontWeight: '900', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            animation: 'slideInUp 0.7s ease-out 0.1s both'
          }}>
            Transform Your Startup<br />
            In <span style={{ 
              color: '#5DD9C1',
              textDecoration: 'underline',
              textDecorationColor: '#FFB6D9',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>8 Weeks</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.4rem', 
            opacity: 0.95,
            lineHeight: 1.8,
            maxWidth: '750px',
            margin: '0 auto 3rem',
            animation: 'slideInUp 0.7s ease-out 0.2s both'
          }}>
            From vision to valuation. A meticulously designed accelerator program backed by proven frameworks, expert mentorship, and direct investor connections.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            animation: 'slideInUp 0.7s ease-out 0.3s both'
          }}>
            <button 
              onClick={() => setCurrentPage('login')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'white',
                color: '#2C5F3F',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                letterSpacing: '0.5px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.25)';
              }}
            >
              Apply Now <Sparkles size={20} />
            </button>

            <button
              onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '700',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(93, 217, 193, 0.2)';
                e.currentTarget.style.borderColor = '#5DD9C1';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Learn More <ArrowRight size={20} />
            </button>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '2.5rem',
            maxWidth: '850px',
            margin: '0 auto',
            animation: 'slideInUp 0.7s ease-out 0.4s both'
          }}>
            {[
              { icon: '📅', value: '8 Weeks', label: 'Intensive Program' },
              { icon: '🎯', value: '10+', label: 'Warm Intros' },
              { icon: '👥', value: '50+', label: ' Network Connections' },
              { icon: '💰', value: '₹5Cr+', label: 'Resources Value' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(30px); }
          }
          
          @keyframes slideInDown {
            from { 
              opacity: 0;
              transform: translateY(-20px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideInUp {
            from { 
              opacity: 0;
              transform: translateY(30px);
            }
            to { 
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* What You'll Achieve */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.75rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#2C5F3F',
              letterSpacing: '-0.5px'
            }}>
              What You'll <span style={{ color: '#5DD9C1' }}>Achieve</span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#5A8F6A',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Our comprehensive program delivers tangible outcomes that accelerate your startup's growth trajectory
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
          }}>
            {[
              { 
                icon: <Target size={45} />,
                title: 'Investor-Ready Pitch',
                description: 'Craft a compelling narrative backed by solid financials and market validation that resonates with VCs',
                color: '#3D7551'
              },
              { 
                icon: <Users size={45} />,
                title: 'Strategic Network',
                description: 'Connect with 50+ mentors, founders, and investors in your domain with warm intros',
                color: '#5DD9C1'
              },
              { 
                icon: <Lightbulb size={45} />,
                title: 'Product-Market Fit',
                description: 'Validate assumptions and refine your offering through real user feedback and data-driven insights',
                color: '#3D7551'
              },
              { 
                icon: <TrendingUp size={45} />,
                title: 'Growth Frameworks',
                description: 'Master proven strategies for customer acquisition, retention, and revenue scaling',
                color: '#5DD9C1'
              },
              { 
                icon: <Award size={45} />,
                title: 'Demo Day Spotlight',
                description: 'Pitch to a curated audience of active investors and industry leaders to showcase your progress',
                color: '#3D7551'
              },
              { 
                icon: <Rocket size={45} />,
                title: 'Lifetime Community',
                description: 'Join an exclusive network of alumni founders with ongoing support and collaboration opportunities',
                color: '#5DD9C1'
              }
            ].map((benefit, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                padding: '2.75rem',
                borderRadius: '20px',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 4px 20px rgba(61, 117, 81, 0.1)',
                border: '1px solid rgba(61, 117, 81, 0.12)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 45px rgba(61, 117, 81, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(61, 117, 81, 0.1)';
              }}
              >
                {/* Gradient accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${benefit.color}20, transparent)`,
                  borderRadius: '0 20px 0 100%'
                }}></div>

                <div style={{ 
                  color: benefit.color, 
                  marginBottom: '1.5rem',
                  background: 'white',
                  width: '75px',
                  height: '75px',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 20px ${benefit.color}25`,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '800', 
                  marginBottom: '1rem', 
                  color: '#2C5F3F',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#4A5F52', lineHeight: 1.7, fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section style={{ padding: '6rem 2rem', background: '#F5F9F3' }} id="timeline">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.75rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#2C5F3F',
              letterSpacing: '-0.5px'
            }}>
              Your 8-Week <span style={{ color: '#5DD9C1' }}>Transformation</span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#5A8F6A',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              A week-by-week breakdown of your journey from early-stage startup to investor-ready venture
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
            {/* Vertical Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '3px',
              background: 'linear-gradient(180deg, #5DD9C1 0%, #3D7551 100%)',
              transform: 'translateX(-50%)',
              display: 'none'
            }}></div>

            {weeklyProgram.map((phase, i) => (
              <div 
                key={i}
                onClick={() => setExpandedWeek(expandedWeek === i ? null : i)}
                style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 30px rgba(61, 117, 81, 0.12)',
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  border: '2px solid transparent',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#5DD9C1';
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(61, 117, 81, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 117, 81, 0.12)';
                }}
              >
                {/* Week Badge */}
                <div style={{ 
                  position: 'absolute',
                  top: '-18px',
                  left: '2.5rem',
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? '#5DD9C1' : '#FFB6D9'} 0%, ${i % 2 === 0 ? '#3D7551' : '#FFA3C7'} 100%)`,
                  color: 'white',
                  padding: '0.6rem 1.8rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '800',
                  letterSpacing: '1px',
                  boxShadow: `0 6px 20px ${i % 2 === 0 ? 'rgba(93, 217, 193, 0.4)' : 'rgba(255, 182, 217, 0.4)'}`,
                  textTransform: 'uppercase'
                }}>
                  Week {phase.week}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', marginTop: '0.5rem' }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? '#3D7551' : '#5DD9C1'} 0%, ${i % 2 === 0 ? '#2C5F3F' : '#3D7551'} 100%)`,
                    color: 'white',
                    width: '90px',
                    height: '90px',
                    borderRadius: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginRight: '2.5rem',
                    boxShadow: `0 12px 30px ${i % 2 === 0 ? 'rgba(61, 117, 81, 0.3)' : 'rgba(93, 217, 193, 0.3)'}`,
                    flexShrink: 0
                  }}>
                    {phase.week}
                  </div>
                  <div>
                    <h2 style={{ 
                      fontSize: '2rem', 
                      fontWeight: '800', 
                      marginBottom: '0.5rem',
                      color: '#2C5F3F',
                      letterSpacing: '-0.5px'
                    }}>
                      {phase.title}
                    </h2>
                    <p style={{ 
                      color: '#5A8F6A',
                      fontSize: '1.05rem',
                      fontWeight: '600'
                    }}>
                      {expandedWeek === i ? 'Click to collapse' : 'Click to expand'}
                    </p>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedWeek === i && (
                  <div style={{ 
                    display: 'grid',
                    gap: '1.25rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '2px solid rgba(93, 217, 193, 0.2)',
                    animation: 'slideDown 0.3s ease-out'
                  }}>
                    {phase.items.map((item, j) => (
                      <div key={j} style={{ 
                        display: 'flex', 
                        alignItems: 'flex-start', 
                        background: `linear-gradient(135deg, ${i % 2 === 0 ? '#E8F5E9' : '#F0E8F5'} 0%, ${i % 2 === 0 ? '#D8E6D2' : '#E8D8E8'} 100%)`,
                        padding: '1.5rem',
                        borderRadius: '15px',
                        transition: 'all 0.3s',
                        border: `1px solid ${i % 2 === 0 ? 'rgba(93, 217, 193, 0.2)' : 'rgba(255, 182, 217, 0.2)'}`,
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = i % 2 === 0 
                          ? 'linear-gradient(135deg, #D8E6D2 0%, #C8D6C2 100%)' 
                          : 'linear-gradient(135deg, #E8D8E8 0%, #D8C8D8 100%)';
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = i % 2 === 0 
                          ? 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)' 
                          : 'linear-gradient(135deg, #F0E8F5 0%, #E8D8E8 100%)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      >
                        <div style={{
                          background: 'white',
                          borderRadius: '12px',
                          padding: '10px',
                          marginRight: '1.25rem',
                          flexShrink: 0,
                          boxShadow: `0 4px 12px ${i % 2 === 0 ? 'rgba(61, 117, 81, 0.12)' : 'rgba(255, 182, 217, 0.12)'}`
                        }}>
                          <CheckCircle2 style={{ 
                            width: '24px', 
                            height: '24px', 
                            color: i % 2 === 0 ? '#3D7551' : '#5DD9C1'
                          }} />
                        </div>
                        <div>
                          <h4 style={{ 
                            fontWeight: '700', 
                            fontSize: '1.1rem', 
                            marginBottom: '0.5rem',
                            color: '#2C5F3F',
                            lineHeight: 1.4
                          }}>
                            {item}
                          </h4>
                          <p style={{ 
                            fontSize: '0.95rem', 
                            color: '#5A8F6A',
                            lineHeight: 1.5
                          }}>
                            Interactive workshops and hands-on execution
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              max-height: 0;
              overflow: hidden;
            }
            to {
              opacity: 1;
              max-height: 500px;
              overflow: visible;
            }
          }
        `}</style>
      </section>

      {/* Program Guarantee */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '950px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
            padding: '4rem',
            borderRadius: '30px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 25px 60px rgba(44, 95, 63, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Animated Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '250px',
              height: '250px',
              background: 'rgba(93, 217, 193, 0.1)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              animation: 'float 8s ease-in-out infinite'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                display: 'inline-block'
              }}>🎯</div>
              
              <h2 style={{ 
                fontSize: '2.75rem', 
                fontWeight: '900', 
                marginBottom: '1.5rem',
                letterSpacing: '-0.5px'
              }}>
                Results-Driven <span style={{ color: '#5DD9C1' }}>Guarantee</span>
              </h2>
              
              <p style={{ 
                fontSize: '1.3rem', 
                opacity: 0.95,
                marginBottom: '3rem',
                lineHeight: 1.8,
                maxWidth: '700px',
                margin: '0 auto 3rem'
              }}>
                We're so confident in our program that we offer a <strong>100% full refund</strong> if you don't receive at least <strong>10 founder connections</strong> and <strong>3 warm investor introductions</strong> within 8 weeks.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                {[
                  { icon: '✅', value: '10+', text: 'New Intros' },
                  { icon: '💼', value: '3+', text: 'Workshop Meetings' },
                  { icon: '💰', value: '100%', text: 'Money-Back Guarantee' }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(15px)',
                    padding: '2rem 1.5rem',
                    borderRadius: '18px',
                    border: '2px solid rgba(255, 255, 255, 0.15)',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.2)';
                    e.currentTarget.style.borderColor = '#5DD9C1';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem', color: '#5DD9C1' }}>{item.value}</div>
                    <div style={{ fontSize: '1rem', fontWeight: '600' }}>{item.text}</div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: '0.95rem', opacity: 0.85, fontStyle: 'italic' }}>
                * Terms & conditions apply. See details on application page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ 
        padding: '6rem 2rem', 
        background: 'linear-gradient(135deg, #D8E6D2 0%, #C8D6C2 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.75rem', 
            fontWeight: '900', 
            marginBottom: '1.5rem',
            color: '#2C5F3F',
            letterSpacing: '-0.5px'
          }}>
            Ready to Transform Your Startup?
          </h2>
          
          <p style={{ 
            fontSize: '1.3rem', 
            color: '#4A5F52',
            marginBottom: '3rem',
            lineHeight: 1.8
          }}>
            Join the next cohort of ambitious founders building category-defining companies. Limited to 20 founders per batch.
          </p>

          <button 
            onClick={() => setCurrentPage('login')}
            style={{
              background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
              color: 'white',
              padding: '1.5rem 4rem',
              borderRadius: '50px',
              fontSize: '1.3rem',
              fontWeight: '800',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 12px 40px rgba(61, 117, 81, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 18px 55px rgba(61, 117, 81, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(61, 117, 81, 0.4)';
            }}
          >
            Start Your Journey Now <Rocket size={26} />
          </button>

          <p style={{ 
            marginTop: '2rem', 
            fontSize: '1rem', 
            color: '#5A8F6A',
            fontWeight: '600'
          }}>
            🚀 Next batch starts soon · Limited to 20 founders
          </p>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
      `}</style>
    </div>
  );
}

export default ProgramPage;
