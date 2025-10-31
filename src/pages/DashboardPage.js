import React, { useState } from 'react';
import { Check, X, Zap, Brain } from 'lucide-react';
import { mentors } from '../components/common/data';

function DashboardPage({ setShowAIChat }) {
  const [activeTab, setActiveTab] = useState('progress');

  return (
    <div style={{ padding: '5rem 0', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Welcome back, Founder! 👋</h1>
          <p style={{ color: '#6b7280' }}>Week 3 of 8 - You're making great progress!</p>
        </div>

        {/* Quick Stats */}
        <div style={{ 
          display: 'grid',
          gap: '1.5rem',
          marginBottom: '2rem',
          '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(4, 1fr)' }
        }}>
          {[
            { label: 'Mentor Sessions', value: '3/8', color: '#3b82f6' },
            { label: 'Investor Intros', value: '2/10', color: '#10b981' },
            { label: 'Tasks Completed', value: '12/25', color: '#8b5cf6' },
            { label: 'Network Score', value: '87%', color: '#f59e0b' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: '1rem', height: '1rem', background: stat.color, borderRadius: '9999px', marginRight: '0.75rem' }}></div>
                <span style={{ color: '#6b7280' }}>{stat.label}</span>
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '0.5rem' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
          {['progress', 'mentors', 'funding', 'journal'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'all 0.3s',
                border: 'none',
                cursor: 'pointer',
                ...(activeTab === tab
                  ? {
                      background: 'linear-gradient(to right, #2563eb, #4f46e5)',
                      color: 'white',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }
                  : {
                      background: 'white',
                      color: '#374151'
                    })
              }}
              onMouseOver={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = '#f9fafb';
                }
              }}
              onMouseOut={(e) => {
                if (activeTab !== tab) {
                  e.target.style.background = 'white';
                }
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
          {activeTab === 'progress' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Your 8-Week Progress</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { week: 1, title: 'Mindset Mastery', status: 'completed' },
                  { week: 2, title: 'Market Validation', status: 'completed' },
                  { week: 3, title: 'Investor Storytelling', status: 'current' },
                  { week: 4, title: 'GTM Strategy', status: 'locked' },
                  { week: 5, title: 'Brand Positioning', status: 'locked' },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    border: '2px solid',
                    ...(item.status === 'completed' ? { background: '#dcfce7', borderColor: '#bbf7d0' } :
                        item.status === 'current' ? { background: '#dbeafe', borderColor: '#bfdbfe' } :
                        { background: '#f9fafb', borderColor: '#e5e7eb' })
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{
                          width: '2rem',
                          height: '2rem',
                          borderRadius: '9999px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1rem',
                          ...(item.status === 'completed' ? { background: '#10b981', color: 'white' } :
                              item.status === 'current' ? { background: '#3b82f6', color: 'white' } :
                              { background: '#d1d5db', color: '#6b7280' })
                        }}>
                          {item.status === 'completed' ? <Check style={{ width: '1rem', height: '1rem' }} /> : 
                           item.status === 'current' ? <Zap style={{ width: '1rem', height: '1rem' }} /> : 
                           <X style={{ width: '1rem', height: '1rem' }} />}
                        </div>
                        <div>
                          <h3 style={{ fontWeight: '600' }}>Week {item.week}: {item.title}</h3>
                          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            {item.status === 'completed' ? 'Completed' : 
                             item.status === 'current' ? 'In Progress' : 
                             'Locked'}
                          </p>
                        </div>
                      </div>
                      <button style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        border: 'none',
                        cursor: item.status === 'current' ? 'pointer' : 'not-allowed',
                        ...(item.status === 'current' ? 
                          { background: '#3b82f6', color: 'white' } :
                          { background: '#e5e7eb', color: '#6b7280' })
                      }}
                      onMouseOver={(e) => {
                        if (item.status === 'current') {
                          e.target.style.background = '#2563eb';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (item.status === 'current') {
                          e.target.style.background = '#3b82f6';
                        }
                      }}
                      >
                        {item.status === 'completed' ? 'Review' : 
                         item.status === 'current' ? 'Continue' : 
                         'Locked'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'mentors' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Your Mentor Network</h2>
              <div style={{ 
                display: 'grid',
                gap: '1.5rem',
                '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }
              }}>
                {mentors.slice(0, 2).map(mentor => (
                  <div key={mentor.id} style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)',
                    padding: '1.5rem',
                    borderRadius: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ fontSize: '2.25rem', marginRight: '1rem' }}>{mentor.image}</div>
                      <div>
                        <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>{mentor.name}</h3>
                        <p style={{ color: '#6b7280' }}>{mentor.role}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                      <span style={{ background: '#dbeafe', color: '#1e40af', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>
                        {mentor.expertise}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{
                        flex: 1,
                        background: '#3b82f6',
                        color: 'white',
                        padding: '0.5rem 0',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => e.target.style.background = '#2563eb'}
                      onMouseOut={(e) => e.target.style.background = '#3b82f6'}
                      >
                        Book Session
                      </button>
                      <button 
                        onClick={() => setShowAIChat(true)}
                        style={{
                          flex: 1,
                          background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
                          color: 'white',
                          padding: '0.5rem 0',
                          borderRadius: '0.5rem',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.3s',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseOver={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
                        onMouseOut={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
                      >
                        AI Advice
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'funding' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Funding Progress</h2>
              <div style={{ 
                display: 'grid',
                gap: '2rem',
                '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' }
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  padding: '1.5rem',
                  borderRadius: '1rem'
                }}>
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem' }}>Investor Intros</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      { name: 'Sequoia Capital', status: 'Meeting Scheduled', date: 'Nov 20' },
                      { name: 'Accel Partners', status: 'Intro Sent', date: 'Nov 18' },
                      { name: 'Matrix Partners', status: 'Pending', date: 'Nov 25' },
                    ].map((investor, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'white', borderRadius: '0.5rem' }}>
                        <div>
                          <div style={{ fontWeight: '500' }}>{investor.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{investor.status}</div>
                        </div>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>{investor.date}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{
                  background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
                  padding: '1.5rem',
                  borderRadius: '1rem'
                }}>
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', marginBottom: '1rem' }}>Funding Readiness</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { label: 'Pitch Deck', progress: 90 },
                      { label: 'Financial Model', progress: 75 },
                      { label: 'Traction Metrics', progress: 60 },
                      { label: 'Team Profile', progress: 85 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.label}</span>
                          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{item.progress}%</span>
                        </div>
                        <div style={{ width: '100%', background: '#e5e7eb', borderRadius: '9999px', height: '0.5rem' }}>
                          <div 
                            style={{ 
                              background: '#10b981', 
                              height: '0.5rem', 
                              borderRadius: '9999px',
                              transition: 'all 0.3s',
                              width: `${item.progress}%`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'journal' && (
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Founder's Journal</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { date: 'Today', entry: 'Had a great session with Rahul Sharma on investor storytelling. Key takeaway: Focus on the problem, not just the solution.' },
                  { date: 'Yesterday', entry: 'Completed market validation exercises. Discovered new customer segment worth exploring.' },
                  { date: 'Nov 10', entry: 'First mentor session with Priya Mehta. Got valuable feedback on our fundraising strategy.' },
                ].map((journal, i) => (
                  <div key={i} style={{ background: '#dbeafe', padding: '1rem', borderRadius: '0.75rem', borderLeft: '4px solid #3b82f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>{journal.date}</span>
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Week 3</span>
                    </div>
                    <p style={{ color: '#374151' }}>{journal.entry}</p>
                  </div>
                ))}
              </div>
              <button style={{
                marginTop: '1.5rem',
                background: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => e.target.style.background = '#2563eb'}
              onMouseOut={(e) => e.target.style.background = '#3b82f6'}
              >
                Add New Entry
              </button>
            </div>
          )}
        </div>

        {/* AI Assistant Button */}
        <button 
          onClick={() => setShowAIChat(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'linear-gradient(to right, #8b5cf6, #ec4899)',
            color: 'white',
            padding: '1rem',
            borderRadius: '9999px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
            zIndex: 40
          }}
          onMouseOver={(e) => e.target.style.boxShadow = '0 35px 60px -12px rgba(0, 0, 0, 0.3)'}
          onMouseOut={(e) => e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}
        >
          <Brain style={{ width: '1.5rem', height: '1.5rem' }} />
        </button>
      </div>
    </div>
  );
}

export default DashboardPage;