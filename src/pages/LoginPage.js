import React, { useState } from 'react';
import { Rocket, Check, Users, TrendingUp, Award, Zap, Eye, EyeOff, AlertCircle, Mail, Lock, User, Building } from 'lucide-react';

function LoginPage({ setUser, setCurrentPage }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    startupName: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && !formData.startupName.trim()) {
      newErrors.startupName = 'Startup name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setUser({
        name: formData.name || "Founder Name",
        email: formData.email,
        role: "founder",
        startupName: formData.startupName
      });
      setIsLoading(false);
      setCurrentPage('dashboard');
    }, 1500);
  };

  const InputField = ({ label, type, name, placeholder, icon: Icon, value }) => (
    <div>
      <label style={{ 
        display: 'block', 
        fontSize: '0.95rem', 
        fontWeight: '600', 
        color: '#2C5F3F', 
        marginBottom: '0.5rem' 
      }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#5A8F6A'
        }}>
          <Icon size={20} />
        </div>
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={handleChange}
          required
          style={{
            width: '100%',
            padding: '0.875rem 1rem 0.875rem 3rem',
            border: `2px solid ${errors[name] ? '#ef4444' : 'rgba(93, 217, 193, 0.3)'}`,
            borderRadius: '12px',
            outline: 'none',
            transition: 'all 0.2s',
            fontSize: '1rem',
            color: '#2C5F3F',
            background: 'rgba(93, 217, 193, 0.05)'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = errors[name] ? '#ef4444' : '#3D7551';
            e.target.style.background = 'white';
            e.target.style.boxShadow = `0 0 0 3px ${errors[name] ? 'rgba(239, 68, 68, 0.1)' : 'rgba(61, 117, 81, 0.1)'}`;
          }}
          onBlur={(e) => {
            e.target.style.borderColor = errors[name] ? '#ef4444' : 'rgba(93, 217, 193, 0.3)';
            e.target.style.background = 'rgba(93, 217, 193, 0.05)';
            e.target.style.boxShadow = 'none';
          }}
          placeholder={placeholder}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#5A8F6A',
              padding: 0
            }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {errors[name] && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '0.5rem',
          color: '#ef4444',
          fontSize: '0.85rem'
        }}>
          <AlertCircle size={14} />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex',
      background: '#FAFBFC'
    }}>
      {/* Left Side - Content Section */}
      <div style={{
        flex: 1,
        background: 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
        color: 'white',
        padding: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
          bottom: '-80px',
          left: '-80px',
          width: '350px',
          height: '350px',
          background: 'rgba(255, 182, 217, 0.08)',
          borderRadius: '50%',
          filter: 'blur(70px)'
        }}></div>

        <div style={{ maxWidth: '500px', position: 'relative', zIndex: 1 }}>
          {/* Logo */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem',
            marginBottom: '3rem',
            cursor: 'pointer'
          }}
          onClick={() => setCurrentPage('home')}
          >
            <div style={{
              background: 'rgba(93, 217, 193, 0.2)',
              padding: '1rem',
              borderRadius: '15px',
              backdropFilter: 'blur(10px)'
            }}>
              <Rocket size={40} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
                GrowthYari
              </div>
              <div style={{ fontSize: '0.95rem', opacity: 0.9 }}>
                Student Founder Ecosystem
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 style={{ 
            fontSize: 'clamp(2rem, 4vw, 2.75rem)', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            lineHeight: 1.2,
            letterSpacing: '-1px'
          }}>
            {isLogin ? 'Welcome Back!' : 'Start Your Journey'}
          </h1>

          <p style={{ 
            fontSize: '1.15rem', 
            opacity: 0.95,
            lineHeight: 1.7,
            marginBottom: '3rem'
          }}>
            {isLogin 
              ? 'Sign in to access your dashboard, connect with mentors, and track your startup progress.'
              : 'Join India\'s most selective student founder accelerator. Get mentorship, investor intros, and a community of ambitious builders.'}
          </p>

          {/* Benefits List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {[
              { icon: <Users size={20} />, text: 'Vetted Student Founders' },
              { icon: <TrendingUp size={20} />, text: 'Weekly Workshops & Meetups' },
              { icon: <Award size={20} />, text: 'Warm Investor Intros' },
              { icon: <Zap size={20} />, text: '8-Week Transformation' }
            ].map((benefit, i) => (
              <div key={i} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: '1rem'
              }}>
                <div style={{
                  background: 'rgba(93, 217, 193, 0.2)',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  {benefit.icon}
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div style={{
            padding: '1.5rem',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}>
            <p style={{
              fontSize: '1rem',
              fontStyle: 'italic',
              marginBottom: '1rem',
              lineHeight: 1.6
            }}>
              "GrowthYari helped me find co-founders, validate my idea, and get my first investor intro. The community is incredible!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #5DD9C1, #FFB6D9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold'
              }}>
                R
              </div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '0.95rem' }}>Rahul Kumar</div>
                <div style={{ fontSize: '0.85rem', opacity: 0.85 }}>Founder, TechStart</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        background: 'white'
      }}>
        <div style={{ 
          maxWidth: '450px', 
          width: '100%'
        }}>
          {/* Form Header */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '0.75rem',
              color: '#2C5F3F'
            }}>
              {isLogin ? 'Sign In' : 'Apply Now'}
            </h2>
            <p style={{ 
              color: '#5A8F6A',
              fontSize: '1.05rem'
            }}>
              {isLogin 
                ? 'Access your founder dashboard' 
                : 'Start your 8-week transformation'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {!isLogin && (
              <InputField
                label="Full Name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                icon={User}
                value={formData.name}
              />
            )}
            
            <InputField
              label="Email Address"
              type="email"
              name="email"
              placeholder="you@startup.com"
              icon={Mail}
              value={formData.email}
            />

            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              icon={Lock}
              value={formData.password}
            />

            {!isLogin && (
              <InputField
                label="Startup Name"
                type="text"
                name="startupName"
                placeholder="Your startup name"
                icon={Building}
                value={formData.startupName}
              />
            )}

            {isLogin && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" style={{ width: '16px', height: '16px', cursor: 'pointer' }} />
                  <span style={{ fontSize: '0.9rem', color: '#5A8F6A' }}>Remember me</span>
                </label>
                <button
                  type="button"
                  style={{
                    color: '#3D7551',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#2C5F3F'}
                  onMouseOut={(e) => e.target.style.color = '#3D7551'}
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              style={{
                width: '100%',
                background: isLoading ? '#5A8F6A' : 'linear-gradient(135deg, #3D7551 0%, #2C5F3F 100%)',
                color: 'white',
                padding: '1rem 0',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.05rem',
                border: 'none',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s',
                boxShadow: '0 8px 20px rgba(61, 117, 81, 0.3)',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 12px 30px rgba(61, 117, 81, 0.4)';
                }
              }}
              onMouseOut={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 8px 20px rgba(61, 117, 81, 0.3)';
                }
              }}
            >
              {isLoading ? (
                <>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid white',
                    borderTopColor: 'transparent',
                    borderRadius: '50%',
                    animation: 'spin 0.8s linear infinite'
                  }}></div>
                  Processing...
                </>
              ) : (
                isLogin ? 'Sign In to Dashboard' : 'Apply to Accelerator'
              )}
            </button>
          </form>

          {/* Divider */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            margin: '2rem 0',
            gap: '1rem'
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(93, 217, 193, 0.3)' }}></div>
            <span style={{ color: '#5A8F6A', fontSize: '0.9rem' }}>or</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(93, 217, 193, 0.3)' }}></div>
          </div>

          {/* Toggle Form */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#5A8F6A', marginBottom: '0.75rem' }}>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setFormData({ name: '', email: '', password: '', startupName: '' });
              }}
              style={{
                color: '#3D7551',
                fontWeight: '600',
                fontSize: '1.05rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                textDecorationThickness: '2px',
                textUnderlineOffset: '4px'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#2C5F3F';
                e.target.style.textDecorationColor = '#5DD9C1';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#3D7551';
                e.target.style.textDecorationColor = '#3D7551';
              }}
            >
              {isLogin ? 'Apply Now' : 'Sign In'}
            </button>
          </div>

          {/* Trust Badge */}
          {!isLogin && (
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'rgba(93, 217, 193, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(93, 217, 193, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#2C5F3F',
                fontWeight: '500',
                lineHeight: 1.6
              }}>
                <Check size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem', color: '#3D7551' }} />
                <strong>Results Guaranteed:</strong> 100% refund if goals not met in 8 weeks
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Responsive Mobile View & Animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 968px) {
          body > div > div:first-child {
            flex-direction: column !important;
          }
          body > div > div:first-child > div:first-child {
            padding: 3rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default LoginPage;
