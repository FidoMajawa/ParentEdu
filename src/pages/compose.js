import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ComposeMessage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    recipient: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Sample teacher list
  const teachers = [
    { id: 1, name: "Ms. Johnson (Math)", emoji: "➕" },
    { id: 2, name: "Mr. Davis (Reading)", emoji: "📚" },
    { id: 3, name: "Ms. Garcia (Science)", emoji: "🔬" },
    { id: 4, name: "Mrs. Smith (Principal)", emoji: "👩‍🏫" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/messages');
      }, 1500);
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <Link to="/messages" style={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" style={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 style={styles.headerText}>New Message</h1>
        </div>

        {showSuccess ? (
          <div style={styles.successMessage}>
            <div style={styles.successEmoji}>🎉</div>
            <h2 style={styles.successTitle}>Message Sent!</h2>
            <p style={styles.successText}>Your message has been successfully delivered</p>
            <div style={styles.spinner}></div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            {/* Recipient Field */}
            <div style={styles.formField}>
              <label style={styles.label}>To:</label>
              <select
                name="recipient"
                value={formData.recipient}
                onChange={handleChange}
                required
                style={styles.select}
              >
                <option value="">Select a teacher</option>
                {teachers.map(teacher => (
                  <option key={teacher.id} value={teacher.id}>
                    {teacher.emoji} {teacher.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject Field */}
            <div style={styles.formField}>
              <label style={styles.label}>Subject:</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What's this about?"
                style={styles.input}
              />
            </div>

            {/* Message Field */}
            <div style={styles.formField}>
              <label style={styles.label}>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="8"
                placeholder="Write your message here..."
                style={styles.textarea}
              ></textarea>
            </div>

            {/* Actions */}
            <div style={styles.actions}>
              <button
                type="button"
                onClick={() => navigate('/messages')}
                style={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSending}
                style={isSending ? styles.sendingButton : styles.sendButton}
              >
                {isSending ? (
                  <span style={styles.sendingText}>
                    <svg style={styles.spinnerIcon} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle style={styles.spinnerCircle} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path style={styles.spinnerPath} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span>Send Message</span>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Help Tip */}
        <div style={styles.helpTip}>
          <div style={styles.helpContent}>
            <div style={styles.helpIcon}>💡</div>
            <div>
              <h4 style={styles.helpTitle}>Message Tips</h4>
              <p style={styles.helpText}>Teachers typically respond within 24-48 hours during school days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #ebf8ff, #f3e8ff)',
    padding: '1rem',
  },
  wrapper: {
    maxWidth: '600px',
    margin: 'auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  link: {
    marginRight: '1rem',
    padding: '0.5rem',
    borderRadius: '50%',
    transition: 'background 0.3s',
    ':hover': {
      backgroundColor: '#f3f4f6',
    },
  },
  icon: {
    height: '1.5rem',
    width: '1.5rem',
    color: '#4b5563',
  },
  headerText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    background: 'linear-gradient(to right, #2563eb, #9333ea)',
    backgroundClip: 'text',
    color: 'transparent',
  },
  successMessage: {
    background: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  successEmoji: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2d3748',
  },
  successText: {
    fontSize: '1rem',
    color: '#4b5563',
  },
  spinner: {
    border: '4px solid #2563eb',
    borderTop: '4px solid transparent',
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
    animation: 'spin 1s linear infinite',
  },
  form: {
    background: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  formField: {
    padding: '1.5rem',
    borderBottom: '1px solid #e5e7eb',
  },
  label: {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '0.5rem',
  },
  select: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'border-color 0.3s',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 1.5rem',
    backgroundColor: '#f9fafb',
  },
  cancelButton: {
    padding: '0.75rem 1.5rem',
    background: 'white',
    color: '#4b5563',
    border: '2px solid #d1d5db',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  sendButton: {
    padding: '0.75rem 1.5rem',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
  sendingButton: {
    padding: '0.75rem 1.5rem',
    background: '#a5b4fc',
    color: 'white',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'not-allowed',
  },
  sendingText: {
    display: 'flex',
    alignItems: 'center',
  },
  spinnerIcon: {
    marginRight: '0.5rem',
    animation: 'spin 1s linear infinite',
  },
  spinnerCircle: {
    opacity: '0.5',
  },
  spinnerPath: {
    opacity: '1',
  },
  helpTip: {
    background: '#f3f4f6',
    padding: '1rem',
    borderRadius: '0.5rem',
    marginTop: '2rem',
  },
  helpContent: {
    display: 'flex',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: '2rem',
    marginRight: '1rem',
  },
  helpTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  helpText: {
    fontSize: '1rem',
    color: '#4b5563',
  }
};

export default ComposeMessage;
