import React, { useState } from 'react';
import { Check, X, Zap, Brain, ArrowRight, Users, Briefcase, BookOpen, Target, Lightbulb, Rocket } from 'lucide-react';
import { mentors } from '../components/common/data';

function DashboardPage({ setShowAIChat }) {
  const [userRole, setUserRole] = useState(null);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    startupName: '',
    stage: '',
    goal: '',
    yearOfStudy: '',
    field: '',
    experience: ''
  });
  const [activeTab, setActiveTab] = useState('progress');
  const [showOnboarding, setShowOnboarding] = useState(!userRole);

  // Questionnaire for Founder
  const founderQuestions = [
    {
      id: 'name',
      question: 'What\'s your name?',
      type: 'text',
      placeholder: 'Enter your full name',
      icon: '👤'
    },
    {
      id: 'startupName',
      question: 'What\'s your startup called?',
      type: 'text',
      placeholder: 'Your startup name',
      icon: '🚀'
    },
    {
      id: 'stage',
      question: 'What stage is your startup in?',
      type: 'select',
      options: ['Idea', 'MVP', 'Pre-Revenue', 'Early Traction', 'Scaling'],
      icon: '📈'
    },
    {
      id: 'goal',
      question: 'What\'s your primary goal in 8 weeks?',
      type: 'select',
      options: ['Raise Funds', 'Build MVP', 'Find Co-founder', 'Get First Customers', 'Scale Operations'],
      icon: '🎯'
    }
  ];

  // Questionnaire for Student
  const studentQuestions = [
    {
      id: 'name',
      question: 'What\'s your name?',
      type: 'text',
      placeholder: 'Enter your full name',
      icon: '👤'
    },
    {
      id: 'yearOfStudy',
      question: 'What year of study are you in?',
      type: 'select',
      options: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduated'],
      icon: '📚'
    },
    {
      id: 'field',
      question: 'What\'s your field of study?',
      type: 'text',
      placeholder: 'e.g., Computer Science, Business, Design',
      icon: '🎓'
    },
    {
      id: 'goal',
      question: 'Why are you joining GrowthYari?',
      type: 'select',
      options: ['Start a Startup', 'Learn Entrepreneurship', 'Build Network', 'Explore Ideas', 'Find Co-founders'],
      icon: '💡'
    }
  ];

  const questions = userRole === 'founder' ? founderQuestions : studentQuestions;
  const isComplete = step >= questions.length;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      [questions[step].id]: value
    }));
  };

  const handleNext = () => {
    if (formData[questions[step].id]?.trim()) {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setShowOnboarding(false);
      }
    }
  };

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setStep(0);
    setFormData({
      name: '',
      startupName: '',
      stage: '',
      goal: '',
      yearOfStudy: '',
      field: '',
      experience: ''
    });
  };

  // Onboarding Screen
  if (showOnboarding) {
    if (!userRole) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #F5F9F3 0%, #E8F5E9 100%)',
          padding: '2rem'
        }}>
          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#2C5F3F',
              marginBottom: '1rem',
              letterSpacing: '-1px'
            }}>
              Welcome to <span style={{ color: '#5DD9C1' }}>GrowthYari</span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: '#5A8F6A',
              marginBottom: '4rem',
              lineHeight: 1.7
            }}>
              Tell us what you are, so we can personalize your journey
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Founder Card */}
              <div
                onClick={() => handleRoleSelect('founder')}
                style={{
                  background: 'white',
                  padding: '3rem 2rem',
                  borderRadius: '24px',
                  border: '2px solid rgba(93, 217, 193, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
                  e.currentTarget.style.borderColor = '#5DD9C1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.2)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🚀</div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#2C5F3F',
                  marginBottom: '1rem'
                }}>
                  I'm a Founder
                </h2>
                <p style={{
                  color: '#5A8F6A',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}>
                  I have a startup idea or already building. I want mentorship, investor intros, and scale my business.
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: '#4A5F52'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Expert mentorship</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Investor introductions</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Founder network</span>
                  </div>
                </div>
              </div>

              {/* Student Card */}
              <div
                onClick={() => handleRoleSelect('student')}
                style={{
                  background: 'white',
                  padding: '3rem 2rem',
                  borderRadius: '24px',
                  border: '2px solid rgba(93, 217, 193, 0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(61, 117, 81, 0.15)';
                  e.currentTarget.style.borderColor = '#5DD9C1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(93, 217, 193, 0.2)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📚</div>
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: '800',
                  color: '#2C5F3F',
                  marginBottom: '1rem'
                }}>
                  I'm a Student
                </h2>
                <p style={{
                  color: '#5A8F6A',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}>
                  Still in college but passionate about entrepreneurship. I want to learn, network, and build while studying.
                </p>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  color: '#4A5F52'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Entrepreneurship skills</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Co-founder connections</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Check size={20} style={{ color: '#3D7551' }} />
                    <span>Weekly workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Questionnaire Screen
    const currentQuestion = questions[step];

    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F5F9F3 0%, #E8F5E9 100%)',
        padding: '2rem'
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          {/* Progress Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ color: '#5A8F6A', fontWeight: '600' }}>
                Step {step + 1} of {questions.length}
              </span>
              <span style={{ color: '#5A8F6A', fontWeight: '600' }}>
                {Math.round(((step + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div style={{
              width: '100%',
              height: '8px',
              background: 'rgba(93, 217, 193, 0.2)',
              borderRadius: '9999px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #3D7551, #5DD9C1)',
                width: `${((step + 1) / questions.length) * 100}%`,
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>

          {/* Question Card */}
          <div style={{
            background: 'white',
            padding: '3rem 2rem',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(61, 117, 81, 0.12)',
            border: '1px solid rgba(93, 217, 193, 0.15)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
              {currentQuestion.icon}
            </div>

            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              color: '#2C5F3F',
              marginBottom: '2rem',
              lineHeight: 1.3
            }}>
              {currentQuestion.question}
            </h2>

            {currentQuestion.type === 'text' ? (
              <input
                type="text"
                value={formData[currentQuestion.id] || ''}
                onChange={handleInputChange}
                placeholder={currentQuestion.placeholder}
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleNext();
                }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '2px solid rgba(93, 217, 193, 0.3)',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  marginBottom: '2rem',
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3D7551';
                  e.target.style.boxShadow = '0 0 0 3px rgba(61, 117, 81, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setFormData(prev => ({
                        ...prev,
                        [currentQuestion.id]: option
                      }));
                    }}
                    style={{
                      padding: '1rem',
                      border: `2px solid ${formData[currentQuestion.id] === option ? '#3D7551' : 'rgba(93, 217, 193, 0.3)'}`,
                      background: formData[currentQuestion.id] === option ? 'rgba(93, 217, 193, 0.15)' : 'white',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      fontWeight: '500',
                      color: '#2C5F3F',
                      transition: 'all 0.2s',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      if (formData[currentQuestion.id] !== option) {
                        e.target.style.borderColor = '#5DD9C1';
                        e.target.style.background = 'rgba(93, 217, 193, 0.08)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData[currentQuestion.id] !== option) {
                        e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                        e.target.style.background = 'white';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: `2px solid ${formData[currentQuestion.id] === option ? '#3D7551' : 'rgba(93, 217, 193, 0.3)'}`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {formData[currentQuestion.id] === option && (
                          <div style={{
                            width: '10px',
                            height: '10px',
                            background: '#3D7551',
                            borderRadius: '50%'
                          }}></div>
                        )}
                      </div>
                      {option}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  style={{
                    flex: 1,
                    padding: '1rem',
                    border: '2px solid rgba(93, 217, 193, 0.3)',
                    background: 'white',
                    color: '#3D7551',
                    borderRadius: '12px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = '#3D7551';
                    e.target.style.background = 'rgba(93, 217, 193, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
                    e.target.style.background = 'white';
                  }}
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!formData[currentQuestion.id]?.trim()}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: formData[currentQuestion.id]?.trim() 
                    ? 'linear-gradient(135deg, #3D7551, #2C5F3F)' 
                    : '#C0C0C0',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  fontWeight: '600',
                  cursor: formData[currentQuestion.id]?.trim() ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (formData[currentQuestion.id]?.trim()) {
                    e.target.style.boxShadow = '0 8px 20px rgba(61, 117, 81, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (formData[currentQuestion.id]?.trim()) {
                    e.target.style.boxShadow = 'none';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                {step === questions.length - 1 ? (
                  <>Let's Go <Rocket size={20} /></>
                ) : (
                  <>Next <ArrowRight size={20} /></>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div style={{ padding: '5rem 0', minHeight: '100vh', background: '#F5F9F3' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#2C5F3F' }}>
              Welcome back, {formData.name || 'Founder'}! 👋
            </h1>
            <p style={{ color: '#5A8F6A', fontSize: '1.05rem' }}>
              {userRole === 'founder' 
                ? `${formData.startupName} • Week 3 of 8`
                : `${formData.yearOfStudy} Student • Learning Path`
              }
            </p>
          </div>
          <button
            onClick={() => {
              setShowOnboarding(true);
              setUserRole(null);
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'white',
              color: '#3D7551',
              border: '2px solid rgba(93, 217, 193, 0.3)',
              borderRadius: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#3D7551';
              e.target.style.background = 'rgba(93, 217, 193, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(93, 217, 193, 0.3)';
              e.target.style.background = 'white';
            }}
          >
            Switch Role
          </button>
        </div>

        {/* Quick Stats */}
        <div style={{ 
          display: 'grid',
          gap: '1.5rem',
          marginBottom: '2rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
        }}>
          {userRole === 'founder' ? (
            <>
              <StatCard label="Mentor Sessions" value="3/8" color="#3D7551" />
              <StatCard label="Investor Intros" value="2/10" color="#5DD9C1" />
              <StatCard label="Tasks Completed" value="12/25" color="#FFB6D9" />
              <StatCard label="Network Score" value="87%" color="#F59E0B" />
            </>
          ) : (
            <>
              <StatCard label="Workshops Attended" value="5/12" color="#3D7551" />
              <StatCard label="Connections Made" value="12+" color="#5DD9C1" />
              <StatCard label="Skills Learned" value="8" color="#FFB6D9" />
              <StatCard label="Learning Progress" value="62%" color="#F59E0B" />
            </>
          )}
        </div>

        {/* Main Content */}
        <div style={{ background: 'white', borderRadius: '1.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
          {userRole === 'founder' ? (
            <FounderDashboard setShowAIChat={setShowAIChat} activeTab={activeTab} setActiveTab={setActiveTab} />
          ) : (
            <StudentDashboard setShowAIChat={setShowAIChat} activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
        </div>

        {/* AI Assistant Button */}
        <button 
          onClick={() => setShowAIChat(true)}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'linear-gradient(135deg, #3D7551, #5DD9C1)',
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

// Stat Card Component
function StatCard({ label, value, color }) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${color}15, ${color}08)`,
      padding: '1.5rem',
      borderRadius: '1rem',
      border: `1px solid ${color}30`
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ width: '12px', height: '12px', background: color, borderRadius: '9999px', marginRight: '0.75rem' }}></div>
        <span style={{ color: '#6b7280', fontSize: '0.95rem' }}>{label}</span>
      </div>
      <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#2C5F3F' }}>{value}</div>
    </div>
  );
}

// Founder Dashboard Component
function FounderDashboard({ setShowAIChat, activeTab, setActiveTab }) {
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
        {['progress', 'mentors', 'funding', 'journal'].map(tab => (
          <TabButton key={tab} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>

      {activeTab === 'progress' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Your 8-Week Progress</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { week: 1, title: 'Mindset Mastery', status: 'completed' },
              { week: 2, title: 'Market Validation', status: 'completed' },
              { week: 3, title: 'Investor Storytelling', status: 'current' },
              { week: 4, title: 'GTM Strategy', status: 'locked' },
            ].map((item, i) => (
              <ProgressCard key={i} item={item} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'mentors' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Your Mentor Network</h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {mentors.slice(0, 2).map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} setShowAIChat={setShowAIChat} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'funding' && (
        <FundingSection />
      )}

      {activeTab === 'journal' && (
        <JournalSection />
      )}
    </>
  );
}

// Student Dashboard Component
function StudentDashboard({ setShowAIChat, activeTab, setActiveTab }) {
  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto' }}>
        {['learning', 'workshops', 'mentors', 'network'].map(tab => (
          <TabButton key={tab} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </div>

      {activeTab === 'learning' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Your Learning Path</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { module: 1, title: 'Entrepreneurship 101', progress: 100 },
              { module: 2, title: 'Problem Validation', progress: 85 },
              { module: 3, title: 'Business Model Canvas', progress: 60 },
              { module: 4, title: 'Pitching Basics', progress: 0 },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '1.25rem',
                borderRadius: '0.75rem',
                border: '2px solid rgba(93, 217, 193, 0.2)',
                background: item.progress === 100 ? '#ECFDF5' : item.progress > 0 ? '#EFF6FF' : '#F9FAFB'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontWeight: '600', color: '#2C5F3F' }}>Module {item.module}: {item.title}</h3>
                  <span style={{ fontSize: '0.9rem', color: '#5A8F6A' }}>{item.progress}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(93, 217, 193, 0.2)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{
                    height: '100%',
                    background: '#3D7551',
                    width: `${item.progress}%`,
                    transition: 'width 0.3s'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'workshops' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Upcoming Workshops</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { title: 'Founder Storytelling', date: 'Nov 15', time: '6 PM', location: 'Online' },
              { title: 'MVP in 7 Days', date: 'Nov 18', time: '4 PM', location: 'Bangalore' },
              { title: 'Pitch Perfect', date: 'Nov 22', time: '5 PM', location: 'Online' },
            ].map((ws, i) => (
              <div key={i} style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'linear-gradient(135deg, #F5F9F3, #E8F5E9)',
                border: '1px solid rgba(93, 217, 193, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <h3 style={{ fontWeight: '600', color: '#2C5F3F', marginBottom: '0.25rem' }}>{ws.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#5A8F6A' }}>{ws.date} • {ws.time} • {ws.location}</p>
                </div>
                <button style={{
                  background: '#3D7551',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#2C5F3F'}
                onMouseLeave={(e) => e.target.style.background = '#3D7551'}
                >
                  Register
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'mentors' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Available Mentors</h2>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {mentors.slice(0, 3).map(mentor => (
              <MentorCard key={mentor.id} mentor={mentor} setShowAIChat={setShowAIChat} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'network' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Your Connections</h2>
          <p style={{ color: '#5A8F6A', marginBottom: '1.5rem' }}>You've connected with 12 students, 3 mentors, and 2 potential co-founders</p>
          <button style={{
            background: 'linear-gradient(135deg, #3D7551, #2C5F3F)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '0.75rem',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            Browse More Connections
          </button>
        </div>
      )}
    </>
  );
}

// Helper Components
function TabButton({ tab, activeTab, setActiveTab }) {
  return (
    <button
      onClick={() => setActiveTab(tab)}
      style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        fontWeight: '500',
        whiteSpace: 'nowrap',
        transition: 'all 0.3s',
        border: 'none',
        cursor: 'pointer',
        background: activeTab === tab ? 'linear-gradient(135deg, #3D7551, #2C5F3F)' : 'white',
        color: activeTab === tab ? 'white' : '#374151',
        boxShadow: activeTab === tab ? '0 4px 12px rgba(61, 117, 81, 0.2)' : 'none'
      }}
    >
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  );
}

function ProgressCard({ item }) {
  return (
    <div style={{
      padding: '1rem',
      borderRadius: '0.75rem',
      border: '2px solid',
      background: item.status === 'completed' ? '#ECFDF5' : item.status === 'current' ? '#EFF6FF' : '#F9FAFB',
      borderColor: item.status === 'completed' ? '#BBCF9F' : item.status === 'current' ? '#BFDBFE' : '#E5E7EB'
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
            background: item.status === 'completed' ? '#3D7551' : item.status === 'current' ? '#3D7551' : '#D1D5DB',
            color: 'white'
          }}>
            {item.status === 'completed' ? <Check size={16} /> : item.status === 'current' ? <Zap size={16} /> : <X size={16} />}
          </div>
          <div>
            <h3 style={{ fontWeight: '600', color: '#2C5F3F' }}>Week {item.week}: {item.title}</h3>
            <p style={{ fontSize: '0.875rem', color: '#5A8F6A' }}>
              {item.status === 'completed' ? 'Completed' : item.status === 'current' ? 'In Progress' : 'Locked'}
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
          background: item.status === 'current' ? '#3D7551' : '#E5E7EB',
          color: item.status === 'current' ? 'white' : '#6b7280'
        }}>
          {item.status === 'completed' ? 'Review' : item.status === 'current' ? 'Continue' : 'Locked'}
        </button>
      </div>
    </div>
  );
}

function MentorCard({ mentor, setShowAIChat }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #F5F9F3, #E8F5E9)',
      padding: '1.5rem',
      borderRadius: '1rem',
      border: '1px solid rgba(93, 217, 193, 0.2)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '2.5rem', marginRight: '1rem' }}>{mentor.image}</div>
        <div>
          <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#2C5F3F' }}>{mentor.name}</h3>
          <p style={{ color: '#5A8F6A', fontSize: '0.9rem' }}>{mentor.role}</p>
        </div>
      </div>
      <button onClick={() => setShowAIChat(true)} style={{
        width: '100%',
        background: 'linear-gradient(135deg, #3D7551, #5DD9C1)',
        color: 'white',
        padding: '0.75rem',
        borderRadius: '0.5rem',
        border: 'none',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
        Connect
      </button>
    </div>
  );
}

function FundingSection() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Funding Progress</h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <div style={{ background: 'linear-gradient(135deg, #ECFDF5, #D1E7D1)', padding: '1.5rem', borderRadius: '1rem' }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: '1rem', color: '#2C5F3F' }}>Investor Intros</h3>
          {['Sequoia Capital', 'Accel Partners'].map((inv, i) => (
            <div key={i} style={{ padding: '0.75rem', background: 'white', borderRadius: '0.5rem', marginBottom: '0.5rem' }}>
              <div style={{ fontWeight: '500', color: '#2C5F3F' }}>{inv}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JournalSection() {
  return (
    <div>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C5F3F' }}>Founder's Journal</h2>
      {['Today', 'Yesterday', 'Nov 10'].map((date, i) => (
        <div key={i} style={{ background: '#EFF6FF', padding: '1rem', borderRadius: '0.75rem', borderLeft: '4px solid #3D7551', marginBottom: '1rem' }}>
          <div style={{ fontWeight: '600', color: '#2C5F3F', marginBottom: '0.5rem' }}>{date}</div>
          <p style={{ color: '#4A5F52' }}>Great session with mentor today. Got valuable insights on fundraising.</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardPage;
