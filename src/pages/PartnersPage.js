import React, { useState } from 'react';
import { Briefcase, DollarSign, Users, TrendingUp, MapPin, ArrowRight, Search, Filter, Check, ExternalLink, Building2, Target } from 'lucide-react';

function PartnersPage({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Partner startups data
  const partnerStartups = [
    {
      id: 1,
      name: 'TechVenture AI',
      logo: '🤖',
      industry: 'AI & Machine Learning',
      stage: 'Series A',
      location: 'Bangalore',
      description: 'Building next-gen AI solutions for enterprise automation and intelligent workflow management.',
      hiring: true,
      openRoles: ['Full Stack Developer', 'ML Engineer', 'Product Manager'],
      openToInvestment: true,
      fundingGoal: '₹10 Cr',
      website: '#',
      color: '#5DD9C1'
    },
    {
      id: 2,
      name: 'HealthPlus Connect',
      logo: '🏥',
      industry: 'HealthTech',
      stage: 'Seed',
      location: 'Mumbai',
      description: 'Digital health platform connecting patients with specialists through telemedicine and AI diagnostics.',
      hiring: true,
      openRoles: ['Backend Developer', 'Mobile Developer', 'Healthcare Consultant'],
      openToInvestment: true,
      fundingGoal: '₹5 Cr',
      website: '#',
      color: '#FFB6D9'
    },
    {
      id: 3,
      name: 'EduLearn Pro',
      logo: '📚',
      industry: 'EdTech',
      stage: 'Pre-Seed',
      location: 'Delhi',
      description: 'Personalized learning platform using adaptive AI to improve student outcomes and engagement.',
      hiring: true,
      openRoles: ['Frontend Developer', 'Content Creator', 'UX Designer'],
      openToInvestment: true,
      fundingGoal: '₹3 Cr',
      website: '#',
      color: '#3D7551'
    },
    {
      id: 4,
      name: 'GreenEnergy Solutions',
      logo: '⚡',
      industry: 'CleanTech',
      stage: 'Series A',
      location: 'Bangalore',
      description: 'Renewable energy management system helping businesses reduce carbon footprint and energy costs.',
      hiring: true,
      openRoles: ['IoT Engineer', 'Data Scientist', 'Business Development'],
      openToInvestment: false,
      fundingGoal: null,
      website: '#',
      color: '#5DD9C1'
    },
    {
      id: 5,
      name: 'FinFlow Analytics',
      logo: '💰',
      industry: 'FinTech',
      stage: 'Seed',
      location: 'Hyderabad',
      description: 'AI-powered financial analytics platform for SMBs with automated reporting and insights.',
      hiring: true,
      openRoles: ['Full Stack Developer', 'Financial Analyst', 'DevOps Engineer'],
      openToInvestment: true,
      fundingGoal: '₹8 Cr',
      website: '#',
      color: '#FFB6D9'
    },
    {
      id: 6,
      name: 'AgriTech Innovations',
      logo: '🌾',
      industry: 'AgriTech',
      stage: 'Pre-Seed',
      location: 'Pune',
      description: 'Smart farming solutions using IoT sensors and predictive analytics for crop optimization.',
      hiring: true,
      openRoles: ['IoT Developer', 'Agronomist', 'Sales Manager'],
      openToInvestment: true,
      fundingGoal: '₹4 Cr',
      website: '#',
      color: '#3D7551'
    }
  ];

  const filterOptions = [
    { id: 'all', label: 'All Partners' },
    { id: 'hiring', label: 'Hiring Now' },
    { id: 'investing', label: 'Open to Investment' }
  ];

  const filteredStartups = partnerStartups.filter(startup => {
    const matchesFilter = 
      activeFilter === 'all' ||
      (activeFilter === 'hiring' && startup.hiring) ||
      (activeFilter === 'investing' && startup.openToInvestment);
    
    const matchesSearch = 
      startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      startup.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <div style={{ background: '#F5F9F3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '8rem 2rem 5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Elements */}
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${20 + i * 25}%`,
            left: `${15 + i * 30}%`,
            width: `${120 + i * 40}px`,
            height: `${120 + i * 40}px`,
            background: `rgba(93, 217, 193, ${0.06 + i * 0.02})`,
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}></div>
        ))}

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255, 255, 255, 0.12)',
            padding: '0.75rem 1.75rem',
            borderRadius: '50px',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <Building2 size={20} />
            <span style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1.5px' }}>
              PARTNER STARTUPS ECOSYSTEM
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-2px'
          }}>
            Discover & Connect<br />
            With <span style={{ color: '#5DD9C1' }}>Growing Startups</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.4rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '800px',
            marginBottom: '3rem'
          }}>
            Explore hiring opportunities, investment deals, and collaboration possibilities with our curated partner startups.
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '900px'
          }}>
            {[
              { icon: <Building2 size={28} />, value: '50+', label: 'Partner Startups' },
              { icon: <Briefcase size={28} />, value: '200+', label: 'Open Positions' },
              { icon: <DollarSign size={28} />, value: '₹100Cr+', label: 'Funding Opportunities' },
              { icon: <Users size={28} />, value: '1000+', label: 'Connections Made' }
            ].map((stat, i) => (
              <div key={i} style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                padding: '1.75rem',
                borderRadius: '16px',
                border: '2px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center'
              }}>
                <div style={{ color: '#5DD9C1', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {stat.icon}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>{stat.value}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.9, fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section style={{ padding: '3rem 2rem', background: 'white', position: 'sticky', top: '70px', zIndex: 10, boxShadow: '0 4px 20px rgba(61, 117, 81, 0.08)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: '600px' }}>
              <Search size={20} style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#5A8F6A'
              }} />
              <input
                type="text"
                placeholder="Search by startup name or industry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1rem 1rem 1rem 3.5rem',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.3s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#5DD9C1';
                  e.target.style.boxShadow = '0 0 0 4px rgba(93, 217, 193, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Filter Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#2C5F3F',
                fontWeight: '600'
              }}>
                <Filter size={20} />
                <span>Filter:</span>
              </div>
              {filterOptions.map(option => (
                <button
                  key={option.id}
                  onClick={() => setActiveFilter(option.id)}
                  style={{
                    padding: '0.75rem 1.75rem',
                    borderRadius: '50px',
                    border: `2px solid ${activeFilter === option.id ? '#3D7551' : 'rgba(93, 217, 193, 0.3)'}`,
                    background: activeFilter === option.id ? 'linear-gradient(135deg, #3D7551, #2C5F3F)' : 'white',
                    color: activeFilter === option.id ? 'white' : '#5A8F6A',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s',
                    boxShadow: activeFilter === option.id ? '0 4px 15px rgba(61, 117, 81, 0.3)' : 'none'
                  }}
                  onMouseOver={(e) => {
                    if (activeFilter !== option.id) {
                      e.target.style.borderColor = '#5DD9C1';
                      e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (activeFilter !== option.id) {
                      e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                      e.target.style.background = 'white';
                    }
                  }}
                >
                  {option.label}
                </button>
              ))}
              <span style={{ color: '#5A8F6A', fontSize: '0.95rem', fontWeight: '600' }}>
                ({filteredStartups.length} startups found)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section style={{ padding: '5rem 2rem', background: 'linear-gradient(to bottom, #F5F9F3, #E8F5E9)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '2.5rem'
          }}>
            {filteredStartups.map((startup, i) => (
              <div key={startup.id} style={{
                background: 'white',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: '0 8px 30px rgba(61, 117, 81, 0.1)',
                border: '2px solid rgba(93, 217, 193, 0.15)',
                transition: 'all 0.4s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(61, 117, 81, 0.2)';
                e.currentTarget.style.borderColor = startup.color;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 117, 81, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.15)';
              }}
              >
                {/* Corner Accent */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${startup.color}15, transparent)`,
                  borderRadius: '0 24px 0 100%'
                }}></div>

                {/* Header */}
                <div style={{ marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{
                      fontSize: '3rem',
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${startup.color}20, ${startup.color}10)`,
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `2px solid ${startup.color}40`
                    }}>
                      {startup.logo}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '1.75rem',
                        fontWeight: '800',
                        color: '#2C5F3F',
                        marginBottom: '0.5rem',
                        letterSpacing: '-0.5px'
                      }}>
                        {startup.name}
                      </h3>
                      <div style={{
                        display: 'inline-block',
                        background: `${startup.color}20`,
                        color: startup.color,
                        padding: '0.35rem 0.875rem',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        border: `1px solid ${startup.color}40`
                      }}>
                        {startup.stage}
                      </div>
                    </div>
                  </div>

                  {/* Industry & Location */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#5A8F6A',
                      fontWeight: '600'
                    }}>
                      <Target size={16} />
                      {startup.industry}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#5A8F6A',
                      fontWeight: '600'
                    }}>
                      <MapPin size={16} />
                      {startup.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#4A5F52',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    {startup.description}
                  </p>
                </div>

                {/* Hiring Section */}
                {startup.hiring && (
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(93, 217, 193, 0.08), rgba(93, 217, 193, 0.04))',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(93, 217, 193, 0.2)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '1rem'
                    }}>
                      <Briefcase size={20} style={{ color: '#3D7551' }} />
                      <span style={{
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        color: '#2C5F3F'
                      }}>
                        Open Positions ({startup.openRoles.length})
                      </span>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {startup.openRoles.slice(0, 3).map((role, j) => (
                        <div key={j} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.95rem',
                          color: '#2C5F3F',
                          fontWeight: '500'
                        }}>
                          <Check size={16} style={{ color: '#5DD9C1' }} />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Investment Section */}
                {startup.openToInvestment && (
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255, 182, 217, 0.1), rgba(255, 182, 217, 0.05))',
                    padding: '1.5rem',
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(255, 182, 217, 0.3)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <DollarSign size={20} style={{ color: '#3D7551' }} />
                        <span style={{
                          fontSize: '1.1rem',
                          fontWeight: '700',
                          color: '#2C5F3F'
                        }}>
                          Open to Investment
                        </span>
                      </div>
                      <span style={{
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        color: '#3D7551'
                      }}>
                        {startup.fundingGoal}
                      </span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {startup.hiring && (
                    <button style={{
                      flex: 1,
                      minWidth: '140px',
                      padding: '1rem 1.5rem',
                      background: 'linear-gradient(135deg, #3D7551, #2C5F3F)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)'
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
                      View Jobs <ArrowRight size={18} />
                    </button>
                  )}
                  <button style={{
                    flex: 1,
                    minWidth: '140px',
                    padding: '1rem 1.5rem',
                    background: 'white',
                    color: '#2C5F3F',
                    border: '2px solid rgba(93, 217, 193, 0.3)',
                    borderRadius: '12px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.borderColor = '#5DD9C1';
                    e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                    e.target.style.background = 'white';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  >
                    Learn More <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #3D7551, #2C5F3F)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '800',
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            Want to Become a Partner?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            marginBottom: '3rem',
            lineHeight: 1.7
          }}>
            Join our ecosystem and get access to talent, investors, and growth opportunities
          </p>
          <button
            onClick={() => setCurrentPage('login')}
            style={{
              background: 'white',
              color: '#2C5F3F',
              padding: '1.5rem 4rem',
              borderRadius: '50px',
              fontSize: '1.3rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 10px 35px rgba(0, 0, 0, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2)';
            }}
          >
            Apply as Partner <ArrowRight size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default PartnersPage;
