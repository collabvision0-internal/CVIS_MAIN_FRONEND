import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('message'); // 'message' or 'whatsapp'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleWidget = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (activeTab === 'whatsapp') {
      const url = `https://wa.me/918767421060?text=${encodeURIComponent(message || 'Hello, I would like to know more!')}`;
      window.open(url, '_blank');
    } else {
      alert(`Message sent by ${name} (${email}): ${message}`);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, fontFamily: 'Arial, sans-serif' }}>
      {isOpen && (
        <div style={{ 
          width: '350px', 
          backgroundColor: '#f9fafb', 
          borderRadius: '12px', 
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          marginBottom: '20px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Header */}
          <div style={{ backgroundColor: '#0075aa', color: '#fff', padding: '20px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: 'bold' }}>
              Collab Vision Support
            </h3>
            <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>
              We typically reply in a few minutes.
            </p>
          </div>

          {/* Tabs Container */}
          <div style={{ backgroundColor: '#fff', padding: '15px' }}>
            <div style={{ 
              display: 'flex', 
              backgroundColor: '#f1f5f9', 
              borderRadius: '25px', 
              padding: '4px',
              marginBottom: '20px'
            }}>
              <button 
                onClick={() => setActiveTab('message')}
                style={{
                  flex: 1, 
                  padding: '10px', 
                  border: 'none', 
                  backgroundColor: activeTab === 'message' ? '#fff' : 'transparent',
                  color: activeTab === 'message' ? '#0075aa' : '#64748b',
                  borderRadius: '20px',
                  cursor: 'pointer', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  boxShadow: activeTab === 'message' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <FaEnvelope size={14} /> MESSAGE
              </button>
              <button 
                onClick={() => setActiveTab('whatsapp')}
                style={{
                  flex: 1, 
                  padding: '10px', 
                  border: 'none', 
                  backgroundColor: activeTab === 'whatsapp' ? '#fff' : 'transparent',
                  color: activeTab === 'whatsapp' ? '#555' : '#64748b',
                  borderRadius: '20px',
                  cursor: 'pointer', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  boxShadow: activeTab === 'whatsapp' ? '0 2px 5px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                <FaWhatsapp size={14} /> WHATSAPP
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSendMessage} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {activeTab === 'message' && (
                <>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name" 
                    required
                    style={{ 
                      width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0', 
                      boxSizing: 'border-box', fontSize: '14px', outline: 'none'
                    }}
                  />
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address" 
                    required
                    style={{ 
                      width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0', 
                      boxSizing: 'border-box', fontSize: '14px', outline: 'none'
                    }}
                  />
                </>
              )}
              
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                required
                style={{ 
                  width: '100%', height: '100px', padding: '12px', borderRadius: '6px', 
                  border: '1px solid #e2e8f0', resize: 'none', boxSizing: 'border-box', 
                  fontSize: '14px', outline: 'none', fontFamily: 'inherit'
                }}
              />
              <button 
                type="submit"
                style={{ 
                  width: '100%', padding: '14px', backgroundColor: activeTab === 'whatsapp' ? '#25D366' : '#0075aa', 
                  color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', 
                  fontWeight: 'bold', fontSize: '14px', display: 'flex', 
                  justifyContent: 'center', alignItems: 'center', gap: '8px',
                  marginTop: '4px'
                }}
              >
                {activeTab === 'whatsapp' ? <><FaWhatsapp size={16} /> START WHATSAPP CHAT</> : <><FaPaperPlane size={14} /> SEND MESSAGE</>}
              </button>
            </form>
            
            {activeTab === 'message' && (
              <p style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', marginTop: '15px', marginBottom: 0 }}>
                Replies will be sent to your email address.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div 
        onClick={toggleWidget}
        style={{
          width: '60px', height: '60px', backgroundColor: '#0075aa', borderRadius: '50%',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          boxShadow: '0 4px 12px rgba(0, 117, 170, 0.4)', cursor: 'pointer',
          color: '#fff', fontSize: '26px',
          position: 'relative',
          float: 'right'
        }}
      >
        {isOpen ? <FaTimes size={24} /> : <BsChatDotsFill size={24} />}
        {!isOpen && (
          <div style={{
            position: 'absolute', top: '12px', right: '12px', width: '12px', height: '12px', 
            backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid #0075aa'
          }} />
        )}
      </div>
    </div>
  );
};

export default ChatbotWidget;
