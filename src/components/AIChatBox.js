import React, { useState } from 'react';
import { Brain, X } from 'lucide-react';

function AIChatBox({ setShowAIChat }) {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI mentor assistant. How can I help you today?", isUser: false }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, isUser: true }]);
      setInputText('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "I understand your question. Based on your progress, I recommend focusing on investor storytelling this week. Would you like me to connect you with a mentor specializing in fundraising?", 
          isUser: false 
        }]);
      }, 1000);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '5rem',
      right: '2rem',
      width: '24rem',
      height: '24rem',
      background: 'white',
      borderRadius: '1rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        background: 'linear-gradient(to right, #2563eb, #4f46e5)',
        color: 'white',
        padding: '1rem',
        borderRadius: '1rem 1rem 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Brain style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }} />
          <span style={{ fontWeight: '600' }}>AI Mentor Assistant</span>
        </div>
        <button 
          onClick={() => setShowAIChat(false)}
          style={{
            color: 'white',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => e.target.style.color = '#e5e7eb'}
          onMouseOut={(e) => e.target.style.color = 'white'}
        >
          <X style={{ width: '1.25rem', height: '1.25rem' }} />
        </button>
      </div>

      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
        {messages.map((message, i) => (
          <div key={i} style={{ marginBottom: '1rem', textAlign: message.isUser ? 'right' : 'left' }}>
            <div style={{
              display: 'inline-block',
              padding: '0.75rem',
              borderRadius: '1rem',
              maxWidth: '80%',
              ...(message.isUser 
                ? { 
                    background: '#2563eb', 
                    color: 'white',
                    borderBottomRightRadius: 0
                  } 
                : { 
                    background: '#f3f4f6', 
                    color: '#1f2937',
                    borderBottomLeftRadius: 0
                  })
            }}>
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '1rem', borderTop: '1px solid #e5e7eb' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            style={{
              flex: 1,
              padding: '0.5rem 1rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              outline: 'none',
              transition: 'all 0.2s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#3b82f6';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#d1d5db';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            onClick={handleSend}
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => e.target.style.background = '#2563eb'}
            onMouseOut={(e) => e.target.style.background = '#3b82f6'}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChatBox;