import React from 'react';
import { ChevronRight, TrendingUp, Users, Target, Check, X, Star, Award, Calendar, MessageCircle, Lightbulb, Rocket, ArrowRight, Coffee, BookOpen } from 'lucide-react';
import { testimonials } from '../components/common/data';

function HomePage({ setCurrentPage }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section - Same as before */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #F5F9F3 0%, #E8F5E9 100%)',
        padding: '2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(93, 217, 193, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}></div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{
            maxWidth: '600px',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: '800',
              color: '#2C5F3F',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-2px'
            }}>
              India's Most Selective{' '}
              <span style={{
                background: 'linear-gradient(135deg, #5DD9C1, #3D7551)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Student Founder</span> Ecosystem
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#5A8F6A',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              maxWidth: '540px'
            }}>
              An accelerator that compresses two years of clarity, capital, and connection into just eight powerful weeks.
            </p>

            <p style={{
              fontSize: '1.15rem',
              color: '#3D7551',
              lineHeight: 1.7,
              marginBottom: '3rem',
              maxWidth: '540px',
              fontStyle: 'italic',
              fontWeight: '500'
            }}>
              Because founders & students don't rise alone — they rise with alignment, mentorship, and a trusted circle.
            </p>

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => setCurrentPage('login')}
                style={{
                  background: '#2C5F3F',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 20px rgba(44, 95, 63, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(44, 95, 63, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(44, 95, 63, 0.3)';
                }}
              >
                Apply Now
                <ChevronRight size={20} />
              </button>
              
              <button 
                onClick={() => setCurrentPage('program')}
                style={{
                  background: 'white',
                  color: '#2C5F3F',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.05rem',
                  fontWeight: '600',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#5DD9C1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View Program
              </button>
            </div>
          </div>

          {/* Simplified Graph */}
          <div style={{
            position: 'relative',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              maxWidth: '500px',
              height: '400px',
              background: 'white',
              borderRadius: '24px',
              padding: '2.5rem',
              boxShadow: '0 20px 60px rgba(61, 117, 81, 0.12)',
              border: '1px solid rgba(93, 217, 193, 0.15)',
              position: 'relative'
            }}>
              <svg style={{
                position: 'absolute',
                top: '2.5rem',
                left: '2.5rem',
                right: '2.5rem',
                bottom: '2.5rem',
                width: 'calc(100% - 5rem)',
                height: 'calc(100% - 5rem)'
              }} viewBox="0 0 400 300">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={i * 75}
                    x2="400"
                    y2={i * 75}
                    stroke="rgba(93, 217, 193, 0.15)"
                    strokeWidth="1"
                  />
                ))}

                <path
                  d="M 0 250 L 100 200 L 200 120 L 300 60 L 400 20"
                  fill="none"
                  stroke="#5DD9C1"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: '800',
                    strokeDashoffset: '800',
                    animation: 'drawLine 2s ease-out forwards'
                  }}
                />

                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#5DD9C1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#5DD9C1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 250 L 100 200 L 200 120 L 300 60 L 400 20 L 400 300 L 0 300 Z"
                  fill="url(#grad)"
                  style={{
                    opacity: 0,
                    animation: 'fadeIn 1.5s ease-out 1s forwards'
                  }}
                />

                {[
                  { x: 0, y: 250 },
                  { x: 100, y: 200 },
                  { x: 200, y: 120 },
                  { x: 300, y: 60 },
                  { x: 400, y: 20 }
                ].map((point, i) => (
                  <circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r="5"
                    fill="#2C5F3F"
                    stroke="white"
                    strokeWidth="2"
                    style={{
                      opacity: 0,
                      animation: `fadeIn 0.4s ease-out ${1.2 + i * 0.15}s forwards`
                    }}
                  />
                ))}
              </svg>

              <div style={{
                position: 'absolute',
                top: '15%',
                right: '10%',
                background: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '12px',
                boxShadow: '0 8px 25px rgba(61, 117, 81, 0.15)',
                border: '1px solid rgba(93, 217, 193, 0.2)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out 1.5s forwards'
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#2C5F3F',
                  marginBottom: '0.25rem'
                }}>
                  3x
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#5A8F6A',
                  fontWeight: '600'
                }}>
                  ROI
                </div>
              </div>
            </div>

            {[
              { Icon: Users, top: '10%', left: '10%', delay: '1.8s' },
              { Icon: Target, top: '15%', right: '10%', delay: '2s' },
              { Icon: TrendingUp, bottom: '20%', left: '15%', delay: '2.2s' }
            ].map((item, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...Object.fromEntries(Object.entries(item).filter(([key]) => ['top', 'bottom', 'left', 'right'].includes(key))),
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #E8F5E9, #D8E6D2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(61, 117, 81, 0.1)',
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${item.delay} forwards`
              }}>
                <item.Icon size={24} style={{ color: '#3D7551' }} />
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          @keyframes drawLine {
            to { stroke-dashoffset: 0; }
          }
          @media (max-width: 1024px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr !important;
            }
            div[style*="height: 500px"] {
              display: none !important;
            }
          }
        `}</style>
      </section>

      {/* Community Activities Section - NEW */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2C5F3F',
              marginBottom: '1rem'
            }}>
              Beyond the <span style={{ color: '#5DD9C1' }}>Classroom</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#5A8F6A', maxWidth: '600px', margin: '0 auto' }}>
              Weekly workshops, founder meetups, and networking events designed for student entrepreneurs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Coffee size={32} />,
                title: 'Founder Friday',
                description: 'Weekly casual meetups every Friday. Share challenges, celebrate wins, and build friendships over coffee.',
                frequency: 'Every Friday, 6 PM'
              },
              {
                icon: <BookOpen size={32} />,
                title: 'Skill Workshops',
                description: 'Hands-on workshops on pitching, fundraising, product development, and growth marketing.',
                frequency: 'Twice a week'
              },
              {
                icon: <MessageCircle size={32} />,
                title: 'Mentor Office Hours',
                description: 'Get 1-on-1 time with experienced founders and industry experts. Ask anything, get honest feedback.',
                frequency: 'Daily slots available'
              },
              {
                icon: <Lightbulb size={32} />,
                title: 'Idea Jam Sessions',
                description: 'Brainstorm with peers, validate assumptions, and refine your startup idea in collaborative sessions.',
                frequency: 'Weekly Thursdays'
              }
            ].map((activity, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #F5F9F3, #E8F5E9)',
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'all 0.3s',
                border: '1px solid rgba(93, 217, 193, 0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ color: '#3D7551', marginBottom: '1.5rem' }}>{activity.icon}</div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C5F3F' }}>
                  {activity.title}
                </h3>
                <p style={{ color: '#5A8F6A', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1rem' }}>
                  {activity.description}
                </p>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(93, 217, 193, 0.2)',
                  color: '#2C5F3F',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {activity.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '6rem 2rem', background: '#F5F9F3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: '#2C5F3F',
              marginBottom: '1rem'
            }}>
              Why <span style={{ color: '#5DD9C1' }}>GrowthYari</span>?
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#5A8F6A', maxWidth: '600px', margin: '0 auto' }}>
              We don't just offer advice. We provide execution-focused support that drives real results.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Users size={32} />,
                title: 'Hand-Picked Community',
                others: 'Generic online groups',
                growthyari: 'Vetted student founders & mentors'
              },
              {
                icon: <Target size={32} />,
                title: 'Real Investor Intros',
                others: 'Cold pitching practice',
                growthyari: 'Warm introductions to active VCs'
              },
              {
                icon: <Award size={32} />,
                title: 'Results Guarantee',
                others: 'Pay and hope',
                growthyari: '100% refund if goals not met'
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '20px',
                transition: 'all 0.3s',
                border: '1px solid rgba(93, 217, 193, 0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ color: '#3D7551', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>
                  {item.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <X size={20} style={{ color: '#ef4444', flexShrink: 0 }} />
                    <span style={{ color: '#6b7280', textDecoration: 'line-through' }}>{item.others}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#2C5F3F', flexShrink: 0 }} />
                    <span style={{ color: '#2C5F3F', fontWeight: '600' }}>{item.growthyari}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with 4.5 stars */}
      <section style={{ padding: '6rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2C5F3F', marginBottom: '1rem' }}>
              Success Stories
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#5A8F6A', maxWidth: '600px', margin: '0 auto' }}>
              Hear from student founders who transformed their startups through GrowthYari
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {testimonials.map((test, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #F5F9F3, #E8F5E9)',
                padding: '2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(93, 217, 193, 0.2)',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                {/* 4.5 stars for second testimonial, 5 for others */}
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                  {[...Array(5)].map((_, j) => (
                    <Star 
                      key={j} 
                      size={20} 
                      style={{ 
                        fill: (i === 1 && j === 4) ? 'none' : '#FFD700',
                        color: '#FFD700',
                        clipPath: (i === 1 && j === 4) ? 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' : 'none'
                      }} 
                    />
                  ))}
                  {i === 1 && (
                    <Star 
                      size={20} 
                      style={{ 
                        fill: '#FFD700',
                        color: '#FFD700',
                        clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                        marginLeft: '-20px'
                      }} 
                    />
                  )}
                </div>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#2C5F3F',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic'
                }}>
                  "{test.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #3D7551, #5DD9C1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold'
                  }}>
                    {test.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', color: '#2C5F3F' }}>{test.name}</div>
                    <div style={{ fontSize: '0.9rem', color: '#5A8F6A' }}>{test.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #3D7551, #2C5F3F)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.75rem', fontWeight: 'bold', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
            Ready to Build Something Amazing?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.95, lineHeight: 1.7 }}>
            Join the next cohort of ambitious student founders transforming their startups. Limited spots available.
          </p>
          <button 
            onClick={() => setCurrentPage('login')}
            style={{
              background: 'white',
              color: '#2C5F3F',
              padding: '1.25rem 3rem',
              borderRadius: '12px',
              fontSize: '1.15rem',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
            }}
          >
            Apply to Accelerator
            <ArrowRight size={24} />
          </button>
          <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', opacity: 0.85 }}>
            🎯 Applications reviewed on a rolling basis
          </p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
