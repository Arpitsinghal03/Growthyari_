import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, Search, ChevronRight, Video, Sparkles, Award } from 'lucide-react';

function EventsPage({ setCurrentPage }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Event categories
  const categories = [
    { id: 'All', label: 'All Events', icon: '🎯' },
    { id: 'Networking', label: 'Networking', icon: '🤝' },
    { id: 'Workshop', label: 'Workshops', icon: '🛠️' },
    { id: 'Pitch', label: 'Pitch Events', icon: '🎤' },
    { id: 'Webinar', label: 'Webinars', icon: '💻' },
    { id: 'Demo Day', label: 'Demo Days', icon: '🚀' }
  ];

  const cities = ['All', 'Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Online'];

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Founder Friday Meetup',
      category: 'Networking',
      date: 'Nov 15, 2025',
      time: '6:00 PM - 9:00 PM',
      city: 'Bangalore',
      venue: 'WeWork Galaxy, Residency Road',
      attendees: 150,
      maxAttendees: 200,
      type: 'In-Person',
      featured: true,
      image: '🤝',
      description: 'Connect with fellow founders over coffee and conversations. Share challenges, wins, and build lasting relationships.',
      speakers: ['Rahul Sharma', 'Priya Singh'],
      tags: ['Networking', 'Founders', 'Community'],
      price: 'Free',
      status: 'Open'
    },
    {
      id: 2,
      title: 'Pitch Perfect Workshop',
      category: 'Workshop',
      date: 'Nov 18, 2025',
      time: '2:00 PM - 5:00 PM',
      city: 'Mumbai',
      venue: '91Springboard, Andheri',
      attendees: 45,
      maxAttendees: 50,
      type: 'In-Person',
      featured: true,
      image: '🎤',
      description: 'Master the art of pitching with hands-on practice sessions and feedback from experienced investors.',
      speakers: ['Ankit Verma (VC Partner)', 'Neha Kapoor'],
      tags: ['Pitch', 'Investors', 'Workshop'],
      price: '₹500',
      status: 'Filling Fast'
    },
    {
      id: 3,
      title: 'Growth Hacking Masterclass',
      category: 'Webinar',
      date: 'Nov 20, 2025',
      time: '7:00 PM - 8:30 PM',
      city: 'Online',
      venue: 'Zoom',
      attendees: 320,
      maxAttendees: 500,
      type: 'Virtual',
      featured: false,
      image: '💻',
      description: 'Learn proven growth strategies from founders who scaled to 1M+ users. Live Q&A included.',
      speakers: ['Vikram Malhotra', 'Sarah D\'Souza'],
      tags: ['Growth', 'Marketing', 'Webinar'],
      price: 'Free',
      status: 'Open'
    },
    {
      id: 4,
      title: 'Demo Day - Batch 4',
      category: 'Demo Day',
      date: 'Dec 5, 2025',
      time: '3:00 PM - 7:00 PM',
      city: 'Delhi',
      venue: 'India Habitat Centre',
      attendees: 180,
      maxAttendees: 250,
      type: 'In-Person',
      featured: true,
      image: '🚀',
      description: 'Watch 20 startups pitch to a room full of investors, angels, and industry leaders. Networking follows.',
      speakers: ['Batch 4 Founders', '50+ Investors'],
      tags: ['Demo Day', 'Investors', 'Pitching'],
      price: 'Invite Only',
      status: 'RSVP Required'
    },
    {
      id: 5,
      title: 'Product Design Sprint',
      category: 'Workshop',
      date: 'Nov 22, 2025',
      time: '10:00 AM - 6:00 PM',
      city: 'Hyderabad',
      venue: 'T-Hub, IIIT Campus',
      attendees: 28,
      maxAttendees: 30,
      type: 'In-Person',
      featured: false,
      image: '🎨',
      description: 'Full-day intensive workshop on running design sprints. Build and validate product ideas in hours.',
      speakers: ['Karan Mehra (Design Lead)', 'Team'],
      tags: ['Design', 'Product', 'Workshop'],
      price: '₹1,500',
      status: 'Open'
    },
    {
      id: 6,
      title: 'Investor Office Hours',
      category: 'Pitch',
      date: 'Nov 25, 2025',
      time: '11:00 AM - 2:00 PM',
      city: 'Pune',
      venue: 'Venture Center',
      attendees: 15,
      maxAttendees: 20,
      type: 'In-Person',
      featured: false,
      image: '💼',
      description: 'Get 1-on-1 time with active VCs. 15-minute slots for pitch feedback and funding discussions.',
      speakers: ['Multiple VC Partners'],
      tags: ['Investors', 'Funding', 'Mentorship'],
      price: 'Free',
      status: 'Limited Slots'
    }
  ];

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesCity = selectedCity === 'All' || event.city === selectedCity;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesCity && matchesSearch;
  });

  const featuredEvents = filteredEvents.filter(e => e.featured);

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
        {/* Animated Background */}
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${15 + i * 20}%`,
            left: `${10 + i * 25}%`,
            width: `${100 + i * 30}px`,
            height: `${100 + i * 30}px`,
            background: `rgba(93, 217, 193, ${0.05 + i * 0.02})`,
            borderRadius: '50%',
            filter: 'blur(50px)',
            animation: `float ${10 + i * 2}s ease-in-out infinite`
          }}></div>
        ))}

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
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
            <Sparkles size={20} />
            <span style={{ fontSize: '0.95rem', fontWeight: '700', letterSpacing: '1.5px' }}>
              700+ EVENTS ANNUALLY
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
            fontWeight: '900', 
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-2px'
          }}>
            Discover Events That<br />
            <span style={{ color: '#5DD9C1' }}>Accelerate Your Growth</span>
          </h1>
          
          {/* Subtitle */}
          <p style={{ 
            fontSize: '1.4rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            maxWidth: '800px',
            marginBottom: '3rem'
          }}>
            From weekly founder meetups to exclusive investor sessions, find events that matter for your startup journey.
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '900px'
          }}>
            {[
              { icon: <Calendar size={28} />, value: '700+', label: 'Events/Year' },
              { icon: <Users size={28} />, value: '10K+', label: 'Monthly Attendees' },
              { icon: <MapPin size={28} />, value: '6 Cities', label: 'Locations' },
              { icon: <Award size={28} />, value: '95%', label: 'Satisfaction Rate' }
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

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(20px, -20px); }
          }
        `}</style>
      </section>

      {/* Search & Filter Section */}
      <section style={{ 
        padding: '3rem 2rem', 
        background: 'white', 
        position: 'sticky', 
        top: '70px', 
        zIndex: 20,
        boxShadow: '0 4px 20px rgba(61, 117, 81, 0.08)',
        borderBottom: '1px solid rgba(93, 217, 193, 0.15)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', maxWidth: '700px' }}>
              <Search size={22} style={{
                position: 'absolute',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#5A8F6A'
              }} />
              <input
                type="text"
                placeholder="Search events by name, tag, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '1.15rem 1.5rem 1.15rem 4rem',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  borderRadius: '14px',
                  fontSize: '1.05rem',
                  outline: 'none',
                  transition: 'all 0.3s',
                  fontWeight: '500'
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

            {/* Filters */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Categories */}
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  color: '#2C5F3F',
                  fontWeight: '600',
                  fontSize: '1.05rem'
                }}>
                  <Tag size={20} />
                  <span>Categories:</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '50px',
                        border: `2px solid ${selectedCategory === cat.id ? '#3D7551' : 'rgba(93, 217, 193, 0.3)'}`,
                        background: selectedCategory === cat.id 
                          ? 'linear-gradient(135deg, #3D7551, #2C5F3F)' 
                          : 'white',
                        color: selectedCategory === cat.id ? 'white' : '#5A8F6A',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: selectedCategory === cat.id ? '0 4px 15px rgba(61, 117, 81, 0.3)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.target.style.borderColor = '#5DD9C1';
                          e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                          e.target.style.background = 'white';
                        }
                      }}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Cities */}
              <div>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  color: '#2C5F3F',
                  fontWeight: '600',
                  fontSize: '1.05rem'
                }}>
                  <MapPin size={20} />
                  <span>Location:</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {cities.map(city => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      style={{
                        padding: '0.65rem 1.25rem',
                        borderRadius: '50px',
                        border: `2px solid ${selectedCity === city ? '#3D7551' : 'rgba(93, 217, 193, 0.3)'}`,
                        background: selectedCity === city ? '#3D7551' : 'white',
                        color: selectedCity === city ? 'white' : '#5A8F6A',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCity !== city) {
                          e.target.style.background = 'rgba(93, 217, 193, 0.1)';
                          e.target.style.borderColor = '#5DD9C1';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCity !== city) {
                          e.target.style.background = 'white';
                          e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                        }
                      }}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Counter */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(93, 217, 193, 0.2)'
              }}>
                <span style={{ color: '#5A8F6A', fontSize: '1rem', fontWeight: '600' }}>
                  {filteredEvents.length} events found
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section style={{ padding: '2rem 2rem 6rem', background: 'linear-gradient(to bottom, #F5F9F3, #E8F5E9)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Featured Events Section */}
          {featuredEvents.length > 0 && (
            <div style={{ marginBottom: '4rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                <Sparkles size={24} style={{ color: '#FFB6D9' }} />
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#2C5F3F',
                  letterSpacing: '-0.5px'
                }}>
                  Featured Events
                </h2>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                gap: '2.5rem'
              }}>
                {featuredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* All Events Section */}
          {filteredEvents.filter(e => !e.featured).length > 0 && (
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '800',
                color: '#2C5F3F',
                letterSpacing: '-0.5px',
                marginBottom: '2rem'
              }}>
                All Events
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
                gap: '2.5rem'
              }}>
                {filteredEvents.filter(e => !e.featured).map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              color: '#5A8F6A'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#2C5F3F', marginBottom: '1rem' }}>
                No events found
              </h3>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Try adjusting your filters or search terms
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedCity('All');
                  setSearchTerm('');
                }}
                style={{
                  background: '#3D7551',
                  color: 'white',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(61, 117, 81, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Clear All Filters
              </button>
            </div>
          )}
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
            Host Your Own Event
          </h2>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            marginBottom: '3rem',
            lineHeight: 1.7
          }}>
            Want to organize a workshop, meetup, or webinar? We'll help you reach 30,000+ founders
          </p>
          <button
            onClick={() => setCurrentPage && setCurrentPage('login')}
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
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px) scale(1.05)';
              e.target.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 35px rgba(0, 0, 0, 0.2)';
            }}
          >
            Submit Event Proposal <Sparkles size={28} />
          </button>
        </div>
      </section>
    </div>
  );
}

// Separate Event Card Component for better organization
function EventCard({ event }) {
  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(61, 117, 81, 0.1)',
      border: event.featured ? '3px solid #FFB6D9' : '2px solid rgba(93, 217, 193, 0.15)',
      transition: 'all 0.4s',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-10px)';
      e.currentTarget.style.boxShadow = '0 25px 50px rgba(61, 117, 81, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 117, 81, 0.1)';
    }}
    >
      {/* Featured Badge */}
      {event.featured && (
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'linear-gradient(135deg, #FFB6D9, #FFA3C7)',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontSize: '0.8rem',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
          boxShadow: '0 4px 15px rgba(255, 163, 199, 0.4)'
        }}>
          <Sparkles size={14} />
          FEATURED
        </div>
      )}

      {/* Event Image/Icon */}
      <div style={{
        height: '200px',
        background: 'linear-gradient(135deg, rgba(93, 217, 193, 0.15), rgba(61, 117, 81, 0.1))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '5rem',
        position: 'relative'
      }}>
        {event.image}
        
        {/* Type Badge */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '1rem',
          background: event.type === 'Virtual' ? '#5DD9C1' : '#3D7551',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '50px',
          fontSize: '0.85rem',
          fontWeight: '700',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          {event.type === 'Virtual' ? <Video size={16} /> : <MapPin size={16} />}
          {event.type}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem' }}>
        {/* Status Badge */}
        <div style={{
          display: 'inline-block',
          background: event.status === 'Filling Fast' ? 'rgba(255, 182, 217, 0.2)' : 'rgba(93, 217, 193, 0.2)',
          color: event.status === 'Filling Fast' ? '#FF69B4' : '#3D7551',
          padding: '0.4rem 1rem',
          borderRadius: '50px',
          fontSize: '0.8rem',
          fontWeight: '700',
          marginBottom: '1rem',
          border: `1px solid ${event.status === 'Filling Fast' ? '#FFB6D9' : '#5DD9C1'}40`
        }}>
          {event.status}
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '1.75rem',
          fontWeight: '800',
          color: '#2C5F3F',
          marginBottom: '1rem',
          letterSpacing: '-0.5px',
          lineHeight: 1.3
        }}>
          {event.title}
        </h3>

        {/* Description */}
        <p style={{
          color: '#5A8F6A',
          lineHeight: 1.7,
          fontSize: '1rem',
          marginBottom: '1.5rem'
        }}>
          {event.description}
        </p>

        {/* Event Details */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          marginBottom: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(93, 217, 193, 0.2)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#2C5F3F',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            <Calendar size={18} style={{ color: '#3D7551' }} />
            {event.date}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#2C5F3F',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            <Clock size={18} style={{ color: '#3D7551' }} />
            {event.time}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: '#2C5F3F',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            <MapPin size={18} style={{ color: '#3D7551' }} />
            {event.venue}
          </div>
        </div>

        {/* Attendees & Price */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: 'rgba(93, 217, 193, 0.08)',
          borderRadius: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Users size={20} style={{ color: '#3D7551' }} />
            <span style={{ fontSize: '0.95rem', fontWeight: '700', color: '#2C5F3F' }}>
              {event.attendees}/{event.maxAttendees}
            </span>
          </div>
          <div style={{
            fontSize: '1.25rem',
            fontWeight: '800',
            color: '#3D7551'
          }}>
            {event.price}
        </div>
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem'
        }}>
          {event.tags.map((tag, i) => (
            <span key={i} style={{
              background: 'rgba(93, 217, 193, 0.15)',
              color: '#3D7551',
              padding: '0.35rem 0.875rem',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              border: '1px solid rgba(93, 217, 193, 0.3)'
            }}>
              #{tag}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button style={{
          width: '100%',
          padding: '1rem',
          background: 'linear-gradient(135deg, #3D7551, #2C5F3F)',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          fontWeight: '700',
          fontSize: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 15px rgba(61, 117, 81, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(61, 117, 81, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(61, 117, 81, 0.3)';
        }}
        >
          Register Now <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default EventsPage;