import React, { useState } from 'react';
import { mentors } from '../components/common/data';
import { Award, Briefcase, Users, TrendingUp, MessageCircle, Calendar } from 'lucide-react';

function MentorsPage() {
  const [selectedExpertise, setSelectedExpertise] = useState('All');
  
  // Get unique expertise areas
  const expertiseAreas = ['All', ...new Set(mentors.map(m => m.expertise))];
  
  // Filter mentors based on selected expertise
  const filteredMentors = selectedExpertise === 'All' 
    ? mentors 
    : mentors.filter(m => m.expertise === selectedExpertise);

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
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(93, 217, 193, 0.1)',
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
              🎓 50+ INDUSTRY EXPERTS
            </span>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            Meet Your <span style={{ 
              color: '#5DD9C1',
              textDecoration: 'underline',
              textDecorationColor: '#FFB6D9',
              textDecorationThickness: '4px',
              textUnderlineOffset: '8px'
            }}>Mentors</span>
          </h1>
          
          <p style={{ 
            fontSize: '1.35rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '700px',
            margin: '0 auto 2rem'
          }}>
            Learn from industry veterans who've scaled startups, raised millions, and built category-defining companies
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '2rem',
            marginTop: '3rem',
            maxWidth: '600px',
            margin: '3rem auto 0'
          }}>
            {[
              { icon: <Award size={24} />, value: '50+', label: 'Expert Mentors' },
              { icon: <Briefcase size={24} />, value: '200+', label: 'Years Experience' },
              { icon: <TrendingUp size={24} />, value: '₹5000Cr+', label: 'Value Created' },
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

      {/* Filter Section */}
      <section style={{ 
        padding: '3rem 2rem 2rem',
        background: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        position: 'sticky',
        top: '70px',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <span style={{ 
              fontWeight: '600', 
              color: '#2C5F3F',
              fontSize: '1.05rem'
            }}>
              Filter by Expertise:
            </span>
            {expertiseAreas.map((expertise, i) => (
              <button
                key={i}
                onClick={() => setSelectedExpertise(expertise)}
                style={{
                  padding: '0.65rem 1.5rem',
                  borderRadius: '50px',
                  border: selectedExpertise === expertise 
                    ? '2px solid #3D7551' 
                    : '2px solid rgba(93, 217, 193, 0.3)',
                  background: selectedExpertise === expertise 
                    ? 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)' 
                    : 'white',
                  color: selectedExpertise === expertise ? 'white' : '#5A8F6A',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s',
                  boxShadow: selectedExpertise === expertise 
                    ? '0 4px 15px rgba(61, 117, 81, 0.3)' 
                    : 'none'
                }}
                onMouseOver={(e) => {
                  if (selectedExpertise !== expertise) {
                    e.currentTarget.style.background = 'rgba(93, 217, 193, 0.1)';
                    e.currentTarget.style.borderColor = '#5DD9C1';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedExpertise !== expertise) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  }
                }}
              >
                {expertise}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors Grid */}
      <section style={{ padding: '4rem 2rem 5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid',
            gap: '2.5rem',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))'
          }}>
            {filteredMentors.map(mentor => (
              <div key={mentor.id} style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(61, 117, 81, 0.1)',
                transition: 'all 0.4s',
                border: '1px solid rgba(93, 217, 193, 0.1)',
                position: 'relative'
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
                {/* Card Header with Background */}
                <div style={{
                  background: 'linear-gradient(135deg, #E8F5E9 0%, #D8E6D2 100%)',
                  padding: '2.5rem 1.5rem 3.5rem',
                  position: 'relative',
                  textAlign: 'center'
                }}>
                  {/* Decorative Circle */}
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '120px',
                    height: '120px',
                    background: 'rgba(93, 217, 193, 0.15)',
                    borderRadius: '50%',
                    filter: 'blur(30px)'
                  }}></div>
                  
                  {/* Avatar */}
                  <div style={{
                    fontSize: '5rem',
                    marginBottom: '0.5rem',
                    filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1))',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {mentor.image}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Name & Role */}
                  <h3 style={{ 
                    fontSize: '1.35rem', 
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    marginBottom: '0.5rem',
                    color: '#2C5F3F',
                    letterSpacing: '-0.5px'
                  }}>
                    {mentor.name}
                  </h3>
                  
                  <p style={{ 
                    color: '#5A8F6A', 
                    textAlign: 'center', 
                    marginBottom: '1rem',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    lineHeight: 1.5
                  }}>
                    {mentor.role}
                  </p>

                  {/* Expertise Badge */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ 
                      background: 'linear-gradient(135deg, rgba(93, 217, 193, 0.2) 0%, rgba(61, 117, 81, 0.15) 100%)',
                      color: '#2C5F3F', 
                      fontSize: '0.85rem', 
                      padding: '0.4rem 1rem', 
                      borderRadius: '50px',
                      fontWeight: '700',
                      border: '1px solid rgba(93, 217, 193, 0.3)',
                      letterSpacing: '0.5px'
                    }}>
                      {mentor.expertise}
                    </div>
                  </div>

                  {/* Stats/Info */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    padding: '1rem',
                    background: 'rgba(93, 217, 193, 0.05)',
                    borderRadius: '12px'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <Users size={18} style={{ color: '#3D7551', marginBottom: '0.25rem' }} />
                      <div style={{ fontSize: '0.85rem', color: '#5A8F6A', fontWeight: '500' }}>50+ Mentees</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <Award size={18} style={{ color: '#3D7551', marginBottom: '0.25rem' }} />
                      <div style={{ fontSize: '0.85rem', color: '#5A8F6A', fontWeight: '500' }}>15+ Years</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem'
                  }}>
                    <button style={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                      color: 'white',
                      padding: '0.85rem 0',
                      borderRadius: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '700',
                      fontSize: '0.95rem',
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
                      <Calendar size={18} />
                      Book a Call
                    </button>
                    
                    <button style={{
                      background: 'rgba(93, 217, 193, 0.1)',
                      color: '#3D7551',
                      padding: '0.85rem',
                      borderRadius: '12px',
                      border: '2px solid rgba(93, 217, 193, 0.3)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#5DD9C1';
                      e.currentTarget.style.borderColor = '#5DD9C1';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'rgba(93, 217, 193, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                      e.currentTarget.style.color = '#3D7551';
                    }}
                    >
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 2rem', 
        background: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#2C5F3F'
          }}>
            Ready to Learn from the Best?
          </h2>
          
          <p style={{ 
            fontSize: '1.15rem', 
            color: '#5A8F6A',
            marginBottom: '2rem',
            lineHeight: 1.7
          }}>
            Get matched with mentors who've walked your path and achieved what you're aiming for
          </p>

          <button style={{
            background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
            color: 'white',
            padding: '1.25rem 3rem',
            borderRadius: '50px',
            fontSize: '1.15rem',
            fontWeight: '700',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s',
            boxShadow: '0 10px 30px rgba(61, 117, 81, 0.3)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(61, 117, 81, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(61, 117, 81, 0.3)';
          }}
          >
            Join the Accelerator
          </button>
        </div>
      </section>
    </div>
  );
}

export default MentorsPage;
