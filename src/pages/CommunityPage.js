import React, { useState } from 'react';
import { Calendar, MessageCircle, Check, Users, MapPin, Clock, Zap, Heart, Award, TrendingUp, Globe, Rocket, Briefcase } from 'lucide-react';

function CommunityPage({ setCurrentPage }) {
  const [selectedCity, setSelectedCity] = useState('All');
  
  const cities = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'];

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
          top: '-80px',
          right: '-80px',
          width: '350px',
          height: '350px',
          background: 'rgba(93, 217, 193, 0.12)',
          borderRadius: '50%',
          filter: 'blur(70px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-60px',
          left: '-60px',
          width: '280px',
          height: '280px',
          background: 'rgba(255, 182, 217, 0.1)',
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
              🚀 30,000+ ACTIVE MEMBERS
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            Join the <span style={{ 
              color: '#5DD9C1',
              textDecoration: 'underline',
              textDecorationColor: '#FFB6D9',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>YariConnect</span> Community
          </h1>
          
          <p style={{ 
            fontSize: '1.35rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '750px',
            margin: '0 auto 2rem'
          }}>
            Connect with 30,000+ founders, mentors, and investors across 4 cities building the future of Indian startups
          </p>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            maxWidth: '800px',
            margin: '3rem auto 0'
          }}>
            {[
              { icon: <Users size={24} />, value: '30,000+', label: 'Members' },
              { icon: <Calendar size={24} />, value: '700+', label: 'Events/Year' },
              { icon: <MapPin size={24} />, value: '4', label: 'Cities' },
              { icon: <Award size={24} />, value: '1000+', label: 'Success Stories' },
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

      {/* Community Benefits */}
      <section style={{ padding: '5rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            Why Join YariConnect?
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '1.15rem',
            color: '#5A8F6A',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}>
            More than a network—it&apos;s your startup&apos;s secret weapon
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              {
                icon: <Users size={40} />,
                title: 'Weekly Founder Meetups',
                description: 'Connect with fellow founders facing similar challenges. Share wins, learn from failures, and build lasting relationships.',
                color: '#3D7551'
              },
              {
                icon: <TrendingUp size={40} />,
                title: 'Exclusive Investor Sessions',
                description: 'Get direct access to VCs and angels. Learn what they look for and practice your pitch in a safe environment.',
                color: '#5DD9C1'
              },
              {
                icon: <MessageCircle size={40} />,
                title: 'Peer Mentorship Circles',
                description: 'Join small groups of founders at similar stages. Get accountability, feedback, and support when you need it most.',
                color: '#3D7551'
              },
              {
                icon: <Globe size={40} />,
                title: 'Resource Library Access',
                description: 'Templates, playbooks, case studies, and tools used by successful startups. Everything you need in one place.',
                color: '#5DD9C1'
              },
              {
                icon: <Briefcase size={40} />,
                title: 'Job Board & Hiring Support',
                description: 'Find co-founders, early employees, and advisors. Post openings and get referrals from the community.',
                color: '#3D7551'
              },
              {
                icon: <Heart size={40} />,
                title: 'Lifetime Network Access',
                description: 'Once you join, you are in for life. The relationships you build here will compound over decades.',
                color: '#5DD9C1'
              }
            ].map((benefit, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'all 0.3s',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.1)',
                border: '1px solid rgba(93, 217, 193, 0.1)'
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
                  color: benefit.color,
                  marginBottom: '1.5rem',
                  background: 'white',
                  width: '70px',
                  height: '70px',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(61, 117, 81, 0.1)'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '1.35rem',
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

      {/* City Filter */}
      <section style={{
        padding: '2rem 2rem',
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
              <MapPin size={20} style={{ color: '#3D7551' }} />
              <span style={{ 
                fontWeight: '600', 
                color: '#2C5F3F',
                fontSize: '1.05rem'
              }}>
                Browse Events in:
              </span>
            </div>
            {cities.map((city, i) => (
              <button
                key={i}
                onClick={() => setSelectedCity(city)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '50px',
                  border: selectedCity === city 
                    ? '2px solid #3D7551' 
                    : '2px solid rgba(93, 217, 193, 0.3)',
                  background: selectedCity === city 
                    ? 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)' 
                    : 'white',
                  color: selectedCity === city ? 'white' : '#5A8F6A',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s',
                  boxShadow: selectedCity === city 
                    ? '0 4px 15px rgba(61, 117, 81, 0.3)' 
                    : 'none'
                }}
                onMouseOver={(e) => {
                  if (selectedCity !== city) {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.1)';
                    e.currentTarget.style.borderColor = '#5DD9C1';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedCity !== city) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  }
                }}
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Community Grid */}
      <section style={{ padding: '4rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gap: '2.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
          }}>
            {/* Upcoming Events Card */}
            <div style={{
              background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
              color: 'white',
              padding: '3rem',
              borderRadius: '25px',
              boxShadow: '0 15px 40px rgba(61, 117, 81, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Decorative Circle */}
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'rgba(93, 217, 193, 0.15)',
                borderRadius: '50%',
                filter: 'blur(50px)'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '15px',
                  padding: '1rem',
                  display: 'inline-flex',
                  marginBottom: '1.5rem'
                }}>
                  <Calendar size={40} />
                </div>

                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Upcoming Events
                </h2>
                
                <p style={{ fontSize: '1.05rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
                  Join our weekly events and connect with founders in your city
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { date: 'Nov 15', title: 'Founder Meetup', city: 'Delhi', attendees: '150+', type: '🤝 Networking' },
                    { date: 'Nov 22', title: 'Pitch Practice', city: 'Mumbai', attendees: '80+', type: '🎤 Workshop' },
                    { date: 'Dec 5', title: 'Demo Day', city: 'Bangalore', attendees: '200+', type: '🚀 Showcase' },
                  ].map((event, i) => (
                    <div key={i} style={{ 
                      background: 'rgba(255, 255, 255, 0.12)', 
                      backdropFilter: 'blur(10px)', 
                      padding: '1.5rem', 
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: '0.85rem', opacity: 0.8, marginBottom: '0.25rem' }}>
                            {event.type}
                          </div>
                          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                            {event.title}
                          </div>
                          <div style={{ fontSize: '0.9rem', opacity: 0.85, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Clock size={14} />
                            {event.date} · {event.city}
                          </div>
                        </div>
                        <div style={{ 
                          fontSize: '0.85rem', 
                          background: 'rgba(93, 217, 193, 0.3)',
                          padding: '0.4rem 1rem', 
                          borderRadius: '50px',
                          fontWeight: '700',
                          whiteSpace: 'nowrap'
                        }}>
                          {event.attendees}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button style={{
                  width: '100%',
                  background: 'white',
                  color: '#2C5F3F',
                  padding: '1rem 0',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                  marginTop: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
                }}
                >
                  View All Events <Calendar size={18} />
                </button>
              </div>
            </div>

            {/* Community Perks Card */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '25px',
              boxShadow: '0 8px 30px rgba(61, 117, 81, 0.1)',
              border: '1px solid rgba(93, 217, 193, 0.1)'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                borderRadius: '15px',
                padding: '1rem',
                display: 'inline-flex',
                marginBottom: '1.5rem'
              }}>
                <Rocket size={40} style={{ color: '#3D7551' }} />
              </div>

              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold', 
                marginBottom: '1rem',
                color: '#2C5F3F'
              }}>
                Member Perks
              </h2>
              
              <p style={{ 
                fontSize: '1.05rem', 
                color: '#5A8F6A',
                marginBottom: '2rem',
                lineHeight: 1.6
              }}>
                Everything you need to accelerate your startup journey
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { icon: <Users size={20} />, text: 'Weekly founder meetups & workshops' },
                  { icon: <TrendingUp size={20} />, text: 'Exclusive investor sessions & pitch practice' },
                  { icon: <MessageCircle size={20} />, text: 'Peer mentorship circles (5-8 founders)' },
                  { icon: <Globe size={20} />, text: 'Resource library (templates & playbooks)' },
                  { icon: <Briefcase size={20} />, text: 'Job board & hiring support' },
                  { icon: <Heart size={20} />, text: 'Lifetime network access' }
                ].map((benefit, i) => (
                  <div key={i} style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    padding: '1rem',
                    background: 'rgba(93, 217, 193, 0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.12)';
                    e.currentTarget.style.paddingLeft = '1.5rem';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.05)';
                    e.currentTarget.style.paddingLeft = '1rem';
                  }}
                  >
                    <div style={{
                      background: 'white',
                      borderRadius: '10px',
                      padding: '8px',
                      marginRight: '1rem',
                      color: '#3D7551',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 2px 8px rgba(61, 117, 81, 0.1)'
                    }}>
                      {benefit.icon}
                    </div>
                    <span style={{ color: '#2C5F3F', fontSize: '1.05rem', fontWeight: '500' }}>
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage('login')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                  color: 'white',
                  padding: '1rem 0',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)',
                  marginTop: '2rem',
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
                Join Community <Zap size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ padding: '4rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '3rem',
            marginBottom: '1.5rem'
          }}>💚</div>
          
          <blockquote style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: '#2C5F3F',
            marginBottom: '1.5rem',
            lineHeight: 1.7,
            fontWeight: '500'
          }}>
            &quot;The YariConnect community has been instrumental in my startup journey. The weekly meetups helped me find my co-founder, and the investor intros led to our seed round.&quot;
          </blockquote>
          
          <div style={{ color: '#5A8F6A', fontSize: '1.1rem' }}>
            <div style={{ fontWeight: 'bold', color: '#2C5F3F', marginBottom: '0.25rem' }}>Priya Sharma</div>
            <div>Founder, TechFlow · Raised ₹5Cr Seed</div>
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
            Your Network is Your Net Worth
          </h2>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#4A5F52',
            marginBottom: '2.5rem',
            lineHeight: 1.7
          }}>
            Join 30,000+ founders building the future together. Apply to our accelerator and get instant community access.
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
            boxShadow: '0 10px 30px rgba(61, 117, 81, 0.4)'
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
            Get Started Today
          </button>

          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#5A8F6A' }}>
            🎉 Free for all accelerator participants
          </p>
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;
