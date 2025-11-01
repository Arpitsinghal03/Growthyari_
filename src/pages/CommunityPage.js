import React, { useState } from 'react';
import { Check, Users, MapPin, TrendingUp, MessageCircle, Globe, Rocket, Briefcase, Heart, MessageCircleMore, ArrowRight, Zap } from 'lucide-react';

function CommunityPage({ setCurrentPage }) {
  const [selectedCity, setSelectedCity] = useState('All');
  const whatsappLink = 'https://chat.whatsapp.com/BxgOPDg5NPcJKjIroVCoQF?mode=ems_share_t';
  
  const cities = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad'];

  return (
    <div style={{ background: '#F5F9F3', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '6rem 2rem 5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative Circles */}
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
            border: '1px solid rgba(255, 255, 255, 0.2)',
            animation: 'fadeInDown 0.6s ease-out'
          }}>
            <span style={{ fontSize: '0.95rem', fontWeight: '600', letterSpacing: '1px' }}>
              🌍 STUDENT FOUNDER COMMUNITY
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            animation: 'fadeInUp 0.7s ease-out 0.1s both'
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
            margin: '0 auto 2.5rem',
            animation: 'fadeInUp 0.7s ease-out 0.2s both'
          }}>
            Connect with student founders, mentors, and investors across multiple cities building the future of Indian startups
          </p>

          {/* Call-to-Action Buttons */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem',
            animation: 'fadeInUp 0.7s ease-out 0.3s both'
          }}>
            {/* WhatsApp Button - Primary */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'white',
                color: '#2C5F3F',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
                textDecoration: 'none'
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
              <MessageCircleMore size={22} style={{ color: '#25D366' }} />
              Join via WhatsApp
              <Zap size={20} />
            </a>

            {/* Secondary CTA Button */}
            <button
              onClick={() => setCurrentPage('login')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                padding: '1.25rem 2.5rem',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(93, 217, 193, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.5)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Apply to Accelerator
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
            animation: 'fadeInUp 0.7s ease-out 0.4s both'
          }}>
            {[
              { icon: <Users size={24} />, value: '5K+', label: 'Members' },
              { icon: <Rocket size={24} />, value: '50+', label: 'Startups' },
              { icon: <MapPin size={24} />, value: '4', label: 'Cities' },
              { icon: <TrendingUp size={24} />, value: '100+', label: 'Success Stories' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'inline-flex',
                  marginBottom: '0.75rem',
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

        <style>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
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
            More than a network—it's your startup's secret weapon
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

      {/* Testimonial Section */}
      <section style={{ padding: '4rem 2rem', background: '#F5F9F3' }}>
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
            <div>Founder, TechFlow</div>
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
            Join thousands of student founders building the future together. Get community access instantly.
          </p>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                color: 'white',
                padding: '1.25rem 3rem',
                borderRadius: '50px',
                fontSize: '1.15rem',
                fontWeight: '700',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 10px 30px rgba(61, 117, 81, 0.4)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(61, 117, 81, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(61, 117, 81, 0.4)';
              }}
            >
              <MessageCircleMore size={22} style={{ color: '#25D366' }} />
              Join on WhatsApp Now
            </a>

            {/* Secondary CTA */}
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
                fontSize: '1.15rem',
                fontWeight: '700',
                border: '2px solid #2C5F3F',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E8F5E9';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Apply to Program
              <ArrowRight size={20} />
            </button>
          </div>

          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#5A8F6A' }}>
            🎉 Free for all accelerator participants
          </p>
        </div>
      </section>
    </div>
  );
}

export default CommunityPage;
