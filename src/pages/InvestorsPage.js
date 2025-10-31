import React, { useState } from 'react';
import { investors } from '../components/common/data';
import { TrendingUp, Briefcase, Target, DollarSign, Building2, Handshake, ArrowRight, Filter } from 'lucide-react';

function InvestorsPage() {
  const [selectedStage, setSelectedStage] = useState('All');
  
  // Get unique investment stages
  const stages = ['All', 'Pre-Seed', 'Seed', 'Series A', 'Series B+'];
  
  // Filter investors (you can customize this based on your data structure)
  const filteredInvestors = selectedStage === 'All' 
    ? investors 
    : investors;

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
          bottom: '-50px',
          left: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 182, 217, 0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)'
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
              💼 WARM INVESTOR INTRODUCTIONS
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            Connected <span style={{ 
              color: '#5DD9C1',
              textDecoration: 'underline',
              textDecorationColor: '#FFB6D9',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>Investors</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.35rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '750px',
            margin: '0 auto 2rem'
          }}>
            Get warm introductions to top-tier investors actively backing Indian startups at every stage of growth
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            maxWidth: '800px',
            margin: '3rem auto 0'
          }}>
            {[
              { icon: <Building2 size={24} />, value: '100+', label: 'Active VCs' },
              { icon: <DollarSign size={24} />, value: '₹10Cr-50Cr', label: 'Ticket Sizes' },
              { icon: <Handshake size={24} />, value: '200+', label: 'Successful Intros' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'inline-flex',
                  marginBottom: '0.5rem',
                  color: '#5DD9C1'
                }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            Why Our Network Matters
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#5A8F6A',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            We've built relationships with investors who believe in backing bold founders
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Handshake size={40} />,
                title: 'Warm Introductions',
                description: 'Skip cold emails. Get personally vouched introductions to investors who match your vision'
              },
              {
                icon: <Target size={40} />,
                title: 'Stage-Appropriate',
                description: 'Connect with investors actively investing at your stage, from pre-seed to Series B+'
              },
              {
                icon: <Briefcase size={40} />,
                title: 'Sector Expertise',
                description: 'Meet investors who deeply understand your industry and can add strategic value'
              },
              {
                icon: <TrendingUp size={40} />,
                title: 'Active Backers',
                description: 'All investors in our network are actively deploying capital in Indian startups'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.1)',
                textAlign: 'center'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.1)';
              }}
              >
                <div style={{
                  color: '#3D7551',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: '#2C5F3F'
                }}>
                  {item.title}
                </h3>
                <p style={{ color: '#4A5F52', lineHeight: 1.7, fontSize: '1.05rem' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ 
        padding: '2rem 2rem 2rem',
        background: 'white',
        borderTop: '1px solid rgba(93, 217, 193, 0.15)',
        position: 'sticky',
        top: '70px',
        zIndex: 10,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Filter size={20} style={{ color: '#3D7551' }} />
              <span style={{ 
                fontWeight: '600', 
                color: '#2C5F3F',
                fontSize: '1.05rem'
              }}>
                Filter by Stage:
              </span>
            </div>
            {stages.map((stage, i) => (
              <button
                key={i}
                onClick={() => setSelectedStage(stage)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '50px',
                  border: selectedStage === stage 
                    ? '2px solid #3D7551' 
                    : '2px solid rgba(93, 217, 193, 0.3)',
                  background: selectedStage === stage 
                    ? 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)' 
                    : 'white',
                  color: selectedStage === stage ? 'white' : '#5A8F6A',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s',
                  boxShadow: selectedStage === stage 
                    ? '0 4px 15px rgba(61, 117, 81, 0.3)' 
                    : 'none'
                }}
                onMouseOver={(e) => {
                  if (selectedStage !== stage) {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.1)';
                    e.currentTarget.style.borderColor = '#5DD9C1';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedStage !== stage) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  }
                }}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Grid */}
      <section style={{ padding: '4rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gap: '2.5rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))'
          }}>
            {filteredInvestors.map(investor => (
              <div key={investor.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(61, 117, 81, 0.1)',
                transition: 'all 0.4s',
                border: '1px solid rgba(93, 217, 193, 0.1)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(61, 117, 81, 0.2)';
                e.currentTarget.style.borderColor = '#5DD9C1';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 117, 81, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.1)';
              }}
              >
                {/* Card Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                  padding: '3rem 2rem',
                  position: 'relative',
                  textAlign: 'center'
                }}>
                  {/* Decorative Element */}
                  <div style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '150px',
                    height: '150px',
                    background: 'rgba(93, 217, 193, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(40px)'
                  }}></div>

                  {/* Avatar/Logo */}
                  <div style={{
                    fontSize: '5rem',
                    marginBottom: '1rem',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {investor.image}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '2rem' }}>
                  {/* Investor Name */}
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    marginBottom: '1rem',
                    color: '#2C5F3F',
                    letterSpacing: '-0.5px'
                  }}>
                    {investor.name}
                  </h3>

                  {/* Ticket Size Badge */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(93, 217, 193, 0.25) 0%, rgba(61, 117, 81, 0.2) 100%)',
                      color: '#2C5F3F', 
                      padding: '0.65rem 1.5rem', 
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      border: '2px solid rgba(93, 217, 193, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <DollarSign size={18} />
                      {investor.ticketSize}
                    </div>
                  </div>

                  {/* Sector Tags */}
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.65rem', 
                    justifyContent: 'center', 
                    marginBottom: '1.75rem',
                    minHeight: '60px'
                  }}>
                    {investor.sectors.map((sector, i) => (
                      <span key={i} style={{ 
                        background: 'rgba(93, 217, 193, 0.12)',
                        color: '#3D7551', 
                        fontSize: '0.85rem', 
                        padding: '0.4rem 1rem', 
                        borderRadius: '50px',
                        fontWeight: '600',
                        border: '1px solid rgba(93, 217, 193, 0.2)'
                      }}>
                        {sector}
                      </span>
                    ))}
                  </div>

                  {/* Info Grid */}
                  <div style={{
                    background: 'rgba(93, 217, 193, 0.05)',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '1rem',
                      textAlign: 'center'
                    }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#5A8F6A', marginBottom: '0.25rem', fontWeight: '600' }}>
                          Portfolio
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2C5F3F' }}>
                          50+
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#5A8F6A', marginBottom: '0.25rem', fontWeight: '600' }}>
                          Active Deals
                        </div>
                        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2C5F3F' }}>
                          12/year
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                    color: 'white',
                    padding: '1rem 0',
                    borderRadius: '12px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: '700',
                    fontSize: '1rem',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(61, 117, 81, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.3)';
                  }}
                  >
                    Request Warm Intro <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            How Introductions Work
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#5A8F6A',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            We make investor connections simple and effective
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { step: '1', title: 'Request Intro', desc: 'Choose investors aligned with your stage and sector' },
              { step: '2', title: 'We Validate', desc: 'Our team reviews your profile and readiness' },
              { step: '3', title: 'Warm Email', desc: 'Get a personalized introduction with context' },
              { step: '4', title: 'You Connect', desc: 'Build relationships and pitch your vision' }
            ].map((item, i) => (
              <div key={i} style={{
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'white',
                  boxShadow: '0 8px 20px rgba(61, 117, 81, 0.3)'
                }}>
                  {item.step}
                </div>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  color: '#2C5F3F'
                }}>
                  {item.title}
                </h4>
                <p style={{ color: '#5A8F6A', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 2rem', 
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
            Ready to Meet Investors?
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#4A5F52',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Join our accelerator to unlock warm introductions and build relationships that matter
          </p>

          <button style={{
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
            gap: '0.75rem'
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
            Apply to Accelerator <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default InvestorsPage;
