import React from 'react';
import { ArrowRight, Zap, Check, Target, Users, Lightbulb, TrendingUp, Award, Rocket } from 'lucide-react';
import { weeklyProgram } from '../components/common/data';

function ProgramPage({ setCurrentPage }) {
  return (
    <div style={{ background: '#F5F9F3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '6rem 2rem 4rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: '150px',
          height: '150px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '0.5rem 1.5rem',
            borderRadius: '50px',
            marginBottom: '1.5rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '600', letterSpacing: '1px' }}>
              🚀 8-WEEK INTENSIVE PROGRAM
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            The GrowthYari <span style={{ 
              color: '#5DD9C1',
              textDecoration: 'underline',
              textDecorationColor: '#FFB6D9',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>Accelerator</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.35rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 2.5rem'
          }}>
            A meticulously designed program to transform your startup from vision to valuation through structured mentorship, investor connections, and proven frameworks
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            maxWidth: '700px',
            margin: '3rem auto 0'
          }}>
            {[
              { icon: '📅', value: '8 Weeks', label: 'Intensive' },
              { icon: '🎯', value: '10+', label: 'Investor Intros' },
              { icon: '👥', value: '50+', label: 'Mentors' },
              { icon: '💰', value: '₹5Cr+', label: 'Network Value' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            What You'll Achieve
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#5A8F6A',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            Our comprehensive program delivers tangible outcomes that accelerate your startup's growth
          </p>

          <div style={{ 
            display: 'grid', 
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {[
              { 
                icon: <Target size={40} />,
                title: 'Investor-Ready Pitch',
                description: 'Craft a compelling narrative backed by solid financials and market validation'
              },
              { 
                icon: <Users size={40} />,
                title: 'Strategic Network',
                description: 'Connect with 50+ mentors, founders, and investors in your domain'
              },
              { 
                icon: <Lightbulb size={40} />,
                title: 'Product-Market Fit',
                description: 'Validate your assumptions and refine your offering through real user feedback'
              },
              { 
                icon: <TrendingUp size={40} />,
                title: 'Growth Frameworks',
                description: 'Master proven strategies for customer acquisition and revenue scaling'
              },
              { 
                icon: <Award size={40} />,
                title: 'Demo Day Opportunity',
                description: 'Pitch to a curated audience of active investors and industry leaders'
              },
              { 
                icon: <Rocket size={40} />,
                title: 'Lifetime Community',
                description: 'Join an exclusive network of alumni founders and ongoing support'
              }
            ].map((benefit, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.1)',
                border: '1px solid rgba(61, 117, 81, 0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.1)';
              }}
              >
                <div style={{ 
                  color: '#3D7551', 
                  marginBottom: '1.5rem',
                  background: 'white',
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(61, 117, 81, 0.15)'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem', 
                  color: '#2C5F3F' 
                }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#4A5F52', lineHeight: 1.7, fontSize: '1.05rem' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Timeline */}
      <section style={{ padding: '5rem 2rem', background: '#F5F9F3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            Your 8-Week Transformation
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#5A8F6A',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            A week-by-week breakdown of your journey from early-stage startup to investor-ready venture
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {weeklyProgram.map((phase, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '25px',
                boxShadow: '0 8px 30px rgba(61, 117, 81, 0.12)',
                transition: 'all 0.4s',
                border: '2px solid transparent',
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
                  top: '-15px',
                  left: '3rem',
                  background: 'linear-gradient(135deg, #FFB6D9 0%, #FFA3C7 100%)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(255, 163, 199, 0.4)'
                }}>
                  WEEK {phase.week}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', marginTop: '1rem' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                    color: 'white',
                    width: '80px',
                    height: '80px',
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    marginRight: '2rem',
                    boxShadow: '0 8px 25px rgba(61, 117, 81, 0.3)',
                    flexShrink: 0
                  }}>
                    {phase.week}
                  </div>
                  <div>
                    <h2 style={{ 
                      fontSize: '2rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      color: '#2C5F3F',
                      letterSpacing: '-0.5px'
                    }}>
                      {phase.title}
                    </h2>
                    <p style={{ 
                      color: '#5A8F6A',
                      fontSize: '1.05rem',
                      fontWeight: '500'
                    }}>
                      Focus: Building your foundation
                    </p>
                  </div>
                </div>

                <div style={{ 
                  display: 'grid',
                  gap: '1.5rem',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  marginLeft: '0'
                }}>
                  {phase.items.map((item, j) => (
                    <div key={j} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                      padding: '1.5rem',
                      borderRadius: '15px',
                      transition: 'all 0.3s',
                      border: '1px solid rgba(93, 217, 193, 0.2)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #D8E6D2 0%, #C8D6C2 100%)';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <div style={{
                        background: 'white',
                        borderRadius: '10px',
                        padding: '8px',
                        marginRight: '1rem',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(61, 117, 81, 0.1)'
                      }}>
                        <Zap style={{ 
                          width: '24px', 
                          height: '24px', 
                          color: '#3D7551'
                        }} />
                      </div>
                      <div>
                        <h3 style={{ 
                          fontWeight: '600', 
                          fontSize: '1.1rem', 
                          marginBottom: '0.5rem',
                          color: '#2C5F3F',
                          lineHeight: 1.4
                        }}>
                          {item}
                        </h3>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Guarantee */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
            padding: '3.5rem',
            borderRadius: '30px',
            textAlign: 'center',
            color: 'white',
            boxShadow: '0 20px 50px rgba(44, 95, 63, 0.3)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decorative Elements */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50%',
              filter: 'blur(40px)'
            }}></div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: '1.5rem'
              }}>🎯</div>
              
              <h2 style={{ 
                fontSize: '2.25rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem',
                letterSpacing: '-0.5px'
              }}>
                Results-Driven Guarantee
              </h2>
              
              <p style={{ 
                fontSize: '1.25rem', 
                opacity: 0.95,
                marginBottom: '2.5rem',
                lineHeight: 1.7,
                maxWidth: '700px',
                margin: '0 auto 2.5rem'
              }}>
                We're so confident in our program that we offer a full refund if you don't receive at least 10 founder connections and 3 warm investor introductions within 8 weeks
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginBottom: '2.5rem'
              }}>
                {[
                  { icon: '✅', text: '10+ Founder Intros' },
                  { icon: '💼', text: '3+ Investor Meetings' },
                  { icon: '💰', text: '100% Money-Back' }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: '600' }}>{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '5rem 2rem', 
        background: 'linear-gradient(135deg, #D8E6D2 0%, #C8D6C2 100%)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#2C5F3F',
            letterSpacing: '-0.5px'
          }}>
            Ready to Transform Your Startup?
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#4A5F52',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Join the next cohort of ambitious founders building category-defining companies
          </p>

          <button 
            onClick={() => setCurrentPage('login')}
            style={{
              background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
              color: 'white',
              padding: '1.25rem 3.5rem',
              borderRadius: '50px',
              fontSize: '1.25rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 10px 30px rgba(61, 117, 81, 0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              letterSpacing: '0.5px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(61, 117, 81, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(61, 117, 81, 0.4)';
            }}
          >
            Start Your Journey <ArrowRight size={24} />
          </button>

          <p style={{ 
            marginTop: '1.5rem', 
            fontSize: '0.95rem', 
            color: '#5A8F6A',
            fontWeight: '500'
          }}>
            🚀 Limited to 20 founders per cohort · Next batch starts soon
          </p>
        </div>
      </section>
    </div>
  );
}

export default ProgramPage;
