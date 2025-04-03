import { Link } from 'react-router-dom';
import { useState } from 'react';

const Messages = () => {
  const messages = [
    { id: 1, sender: "Teacher Sarah", avatar: "👩🏫", subject: "Math Progress Update", preview: "Your child is doing great with addition! We're moving on to subtraction next week...", time: "2 hours ago", read: false, category: "academic" },
    { id: 2, sender: "School Principal", avatar: "👨‍🏫", subject: "Parent-Teacher Meeting", preview: "We'd like to schedule our quarterly parent-teacher meeting for...", time: "1 day ago", read: true, category: "administrative" },
    { id: 3, sender: "Art Teacher", avatar: "🎨", subject: "Art Project Update", preview: "Your child created a wonderful painting today! It will be displayed...", time: "3 days ago", read: true, category: "creative" },
    { id: 4, sender: "PE Teacher", avatar: "🏃‍♂️", subject: "Sports Day Reminder", preview: "Don't forget about our annual sports day coming up next Friday...", time: "5 days ago", read: false, category: "event" }
  ];

  const categories = [
    { id: "all", name: "All Messages" },
    { id: "academic", name: "Academic" },
    { id: "administrative", name: "Administrative" },
    { id: "creative", name: "Creative" },
    { id: "event", name: "Events" }
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Messages</h1>
        <p style={styles.subtitle}>Communications from teachers and school</p>
        <Link to="/compose" style={styles.newMessage}>✏️ New Message</Link>
      </div>

      <div style={styles.categories}>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            style={activeCategory === category.id ? styles.activeCategory : styles.category}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={styles.messagesList}>
        {messages.filter(msg => activeCategory === "all" || msg.category === activeCategory).map(message => (
          <Link to={`/messages/${message.id}`} key={message.id} style={{ ...styles.messageItem, backgroundColor: message.read ? '#fff' : '#f0f8ff' }}>
            <div style={styles.avatar}>{message.avatar}</div>
            <div style={styles.messageContent}>
              <div style={styles.messageHeader}>
                <h3>{message.sender}</h3>
                <span>{message.time}</span>
              </div>
              <h4>{message.subject}</h4>
              <p>{message.preview}</p>
            </div>
          </Link>
        ))}
      </div>

      {messages.filter(msg => activeCategory === "all" || msg.category === activeCategory).length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📭</div>
          <h3>No messages found</h3>
          <p>You don't have any messages in this category</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { width: '90%', maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  title: { fontSize: '24px', color: '#333' },
  subtitle: { color: '#555' },
  newMessage: { padding: '8px 16px', background: 'linear-gradient(to right, #007bff, #6f42c1)', color: 'white', textDecoration: 'none', borderRadius: '5px' },
  categories: { display: 'flex', overflowX: 'auto', gap: '10px', marginBottom: '15px' },
  category: { padding: '8px 16px', border: 'none', background: '#eee', borderRadius: '20px', cursor: 'pointer' },
  activeCategory: { padding: '8px 16px', border: 'none', background: '#007bff', color: 'white', borderRadius: '20px', cursor: 'pointer' },
  messagesList: { background: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' },
  messageItem: { display: 'flex', padding: '15px', borderBottom: '1px solid #ddd', textDecoration: 'none', color: '#333' },
  avatar: { fontSize: '24px', marginRight: '15px' },
  messageContent: { flex: 1 },
  messageHeader: { display: 'flex', justifyContent: 'space-between' },
  emptyState: { textAlign: 'center', padding: '20px' },
  emptyIcon: { fontSize: '40px', marginBottom: '10px' }
};

export default Messages;
