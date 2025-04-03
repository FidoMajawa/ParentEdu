import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  // Styles object
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #EFF6FF, #F3E8FF)',
      padding: '1rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    container: {
      maxWidth: '72rem',
      margin: '0 auto'
    },
    header: {
      marginBottom: '2rem'
    },
    headerTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #4F46E5, #9333EA)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginBottom: '0.5rem'
    },
    headerSubtitle: {
      color: '#4B5563',
      fontSize: '1rem'
    },
    dailyTip: {
      marginTop: '1rem',
      padding: '1rem',
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderLeft: '4px solid #6366F1',
      display: 'flex',
      alignItems: 'flex-start'
    },
    tipEmoji: {
      fontSize: '1.5rem',
      marginRight: '0.75rem'
    },
    tipContent: {
      flex: 1
    },
    tipTitle: {
      fontWeight: '600',
      color: '#4F46E5',
      marginBottom: '0.25rem'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.25rem',
      marginBottom: '2rem'
    },
    statCard: {
      padding: '1.5rem',
      borderRadius: '1rem',
      color: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    statHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    statValue: {
      fontSize: '2.25rem',
      fontWeight: 'bold'
    },
    statLabel: {
      fontSize: '1.125rem'
    },
    statIcon: {
      fontSize: '2.25rem'
    },
    statGrowth: {
      fontSize: '0.875rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '9999px',
      padding: '0.25rem 0.75rem',
      alignSelf: 'flex-start',
      marginTop: '0.5rem'
    },
    twoColumnLayout: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem'
    },
    panel: {
      backgroundColor: 'white',
      borderRadius: '1rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    },
    panelHeader: {
      padding: '1.25rem',
      borderBottom: '1px solid #E5E7EB',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    panelTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1F2937'
    },
    viewAllLink: {
      color: '#4F46E5',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '0.875rem'
    },
    notificationItem: {
      padding: '1.25rem',
      display: 'flex',
      alignItems: 'flex-start',
      transition: 'background-color 0.2s ease'
    },
    notificationUnread: {
      backgroundColor: '#EFF6FF'
    },
    notificationRead: {
      backgroundColor: 'white'
    },
    notificationEmoji: {
      fontSize: '1.5rem',
      marginRight: '1rem'
    },
    notificationContent: {
      flex: 1
    },
    notificationText: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '0.25rem'
    },
    notificationMessage: {
      fontWeight: '500',
      color: '#1F2937'
    },
    notificationMessageRead: {
      fontWeight: '400',
      color: '#4B5563'
    },
    newBadge: {
      marginLeft: '0.5rem',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0.125rem 0.5rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '500',
      backgroundColor: '#DBEAFE',
      color: '#1E40AF'
    },
    notificationTime: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    quickActionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr))',
      gap: '1rem',
      padding: '1.25rem'
    },
    quickAction: {
      padding: '1rem',
      borderRadius: '0.75rem',
      border: '1px solid',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'all 0.2s ease'
    },
    quickActionEmoji: {
      fontSize: '1.75rem',
      marginBottom: '0.5rem'
    },
    quickActionLabel: {
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151'
    },
    activitiesContainer: {
      marginTop: '2rem'
    },
    activitiesScroll: {
      display: 'flex',
      overflowX: 'auto',
      paddingBottom: '1rem',
      margin: '0 -1.25rem',
      padding: '0 1.25rem'
    },
    activityCard: {
      flexShrink: 0,
      width: '16rem',
      marginRight: '1rem',
      background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)',
      borderRadius: '0.75rem',
      padding: '1rem',
      border: '1px solid #E5E7EB'
    },
    activityHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem'
    },
    activityEmoji: {
      fontSize: '1.5rem',
      marginRight: '0.75rem'
    },
    activityTitle: {
      fontWeight: '500',
      marginBottom: '0.125rem'
    },
    activitySubject: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    progressBar: {
      width: '100%',
      height: '0.5rem',
      backgroundColor: '#E5E7EB',
      borderRadius: '9999px',
      overflow: 'hidden',
      marginBottom: '0.5rem'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#4F46E5',
      borderRadius: '9999px'
    },
    progressInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    progressText: {
      fontSize: '0.75rem',
      color: '#6B7280'
    },
    continueLink: {
      fontSize: '0.75rem',
      color: '#4F46E5',
      textDecoration: 'none'
    },
    quoteCard: {
      marginTop: '2rem',
      padding: '1.5rem',
      borderRadius: '1rem',
      background: 'linear-gradient(to right, #6366F1, #8B5CF6)',
      color: 'white',
      textAlign: 'center'
    },
    quoteText: {
      fontSize: '1.25rem',
      fontStyle: 'italic',
      marginBottom: '0.5rem'
    },
    quoteAuthor: {
      color: '#C7D2FE',
      fontSize: '0.875rem'
    }
  };

  // Animated stats with growth indicators
  const [animatedStats, setAnimatedStats] = useState([
    { value: 0, label: "Activities", icon: "📚", color: { background: 'linear-gradient(to bottom right, #8B5CF6, #EC4899)' }, growth: "+2%", path: "/activities" },
    { value: 0, label: "Messages", icon: "✉️", color: { background: 'linear-gradient(to bottom right, #3B82F6, #06B6D4)' }, growth: "+5%", path: "/notifications" },
    { value: 0, label: "Videos", icon: "🎥", color: { background: 'linear-gradient(to bottom right, #EF4444, #F97316)' }, growth: "+12%", path: "/videos" },
    { value: 0, label: "Feedback", icon: "💬", color: { background: 'linear-gradient(to bottom right, #10B981, #34D399)' }, growth: "+8%", path: "/feedback" }
  ]);

  // Animate numbers on mount
  useEffect(() => {
    const finalValues = [12, 3, 5, 2];
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const progress = Math.min(1, (Date.now() - startTime) / duration);
      
      setAnimatedStats(prev => prev.map((stat, i) => ({
        ...stat,
        value: Math.floor(progress * finalValues[i])
      })));

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  }, []);

  // Notifications with interactive elements
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New feedback from Teacher Sarah", time: "2h ago", read: false, path: "/feedback", emoji: "👩‍🏫" },
    { id: 2, text: "Activity 'Count objects at home' due tomorrow", time: "1d ago", read: true, path: "/activities", emoji: "🏠" },
    { id: 3, text: "New video added: 'Science Experiments'", time: "3d ago", read: true, path: "/videos", emoji: "🧪" }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? {...n, read: true} : n
    ));
  };

  // Daily tip with rotation
  const dailyTips = [
    "Try the 20-minute learning sessions for better focus!",
    "Praise specific efforts rather than general results.",
    "Make learning physical with counting steps or jumps.",
    "Use real-life examples when teaching math concepts."
  ];
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % dailyTips.length);
    }, 8000);
    return () => clearInterval(tipInterval);
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Animated Header */}
        <motion.header 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={styles.header}
        >
          <h1 style={styles.headerTitle}>Parent Dashboard</h1>
          <p style={styles.headerSubtitle}>Welcome back! Here's what's happening today.</p>
          
          {/* Daily Tip Carousel */}
          <div style={styles.dailyTip}>
            <span style={styles.tipEmoji}>💡</span>
            <div style={styles.tipContent}>
              <h3 style={styles.tipTitle}>Daily Parenting Tip</h3>
              <motion.p
                key={currentTip}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {dailyTips[currentTip]}
              </motion.p>
            </div>
          </div>
        </motion.header>

        {/* Interactive Stats Grid */}
        <div style={styles.statsGrid}>
          {animatedStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={stat.path}
                style={{ ...styles.statCard, ...stat.color }}
              >
                <div style={styles.statHeader}>
                  <div>
                    <div style={styles.statValue}>{stat.value}</div>
                    <div style={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div style={styles.statIcon}>{stat.icon}</div>
                </div>
                <div style={styles.statGrowth}>{stat.growth} this week</div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={styles.twoColumnLayout}>
          {/* Notifications Panel */}
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2 style={styles.panelTitle}>Recent Notifications</h2>
              <Link 
                to="/notifications" 
                style={styles.viewAllLink}
              >
                View All →
              </Link>
            </div>
            <div>
              {notifications.map((notification) => (
                <motion.div
                  key={notification.id}
                  whileHover={{ backgroundColor: "#F9FAFB" }}
                  style={{
                    ...styles.notificationItem,
                    ...(notification.read ? styles.notificationRead : styles.notificationUnread)
                  }}
                >
                  <Link 
                    to={notification.path} 
                    style={{ display: 'flex', width: '100%' }}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <span style={styles.notificationEmoji}>{notification.emoji}</span>
                    <div style={styles.notificationContent}>
                      <div style={styles.notificationText}>
                        <p style={notification.read ? styles.notificationMessageRead : styles.notificationMessage}>
                          {notification.text}
                        </p>
                        {!notification.read && (
                          <span style={styles.newBadge}>New</span>
                        )}
                      </div>
                      <p style={styles.notificationTime}>{notification.time}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2 style={styles.panelTitle}>Quick Actions</h2>
            </div>
            <div style={styles.quickActionsGrid}>
              <Link
                to="/new-activity"
                style={{
                  ...styles.quickAction,
                  background: 'linear-gradient(to bottom right, #F0FDF4, #ECFDF5)',
                  borderColor: '#D1FAE5'
                }}
              >
                <span style={styles.quickActionEmoji}>➕</span>
                <span style={styles.quickActionLabel}>New Activity</span>
              </Link>
              <Link
                to="/schedule"
                style={{
                  ...styles.quickAction,
                  background: 'linear-gradient(to bottom right, #EFF6FF, #E0E7FF)',
                  borderColor: '#DBEAFE'
                }}
              >
                <span style={styles.quickActionEmoji}>📅</span>
                <span style={styles.quickActionLabel}>Schedule</span>
              </Link>
              <Link
                to="/resources"
                style={{
                  ...styles.quickAction,
                  background: 'linear-gradient(to bottom right, #F5F3FF, #EDE9FE)',
                  borderColor: '#EDE9FE'
                }}
              >
                <span style={styles.quickActionEmoji}>📚</span>
                <span style={styles.quickActionLabel}>Resources</span>
              </Link>
              <Link
                to="/progress"
                style={{
                  ...styles.quickAction,
                  background: 'linear-gradient(to bottom right, #FEFCE8, #FEF9C3)',
                  borderColor: '#FEF3C7'
                }}
              >
                <span style={styles.quickActionEmoji}>📈</span>
                <span style={styles.quickActionLabel}>Progress</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div style={styles.activitiesContainer}>
          <div style={styles.panel}>
            <div style={styles.panelHeader}>
              <h2 style={styles.panelTitle}>Recent Learning Activities</h2>
            </div>
            <div style={styles.activitiesScroll}>
              {[
                { title: "Counting Objects", subject: "Math", progress: 75, emoji: "🔢" },
                { title: "Color Mixing", subject: "Art", progress: 40, emoji: "🎨" },
                { title: "Story Time", subject: "Reading", progress: 90, emoji: "📖" },
                { title: "Nature Walk", subject: "Science", progress: 30, emoji: "🌿" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  style={styles.activityCard}
                >
                  <div style={styles.activityHeader}>
                    <span style={styles.activityEmoji}>{activity.emoji}</span>
                    <div>
                      <h3 style={styles.activityTitle}>{activity.title}</h3>
                      <p style={styles.activitySubject}>{activity.subject}</p>
                    </div>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{ ...styles.progressFill, width: `${activity.progress}%` }}
                    ></div>
                  </div>
                  <div style={styles.progressInfo}>
                    <span style={styles.progressText}>{activity.progress}% complete</span>
                    <Link 
                      to="/activities" 
                      style={styles.continueLink}
                    >
                      Continue →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivational Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={styles.quoteCard}
        >
          <blockquote>
            <p style={styles.quoteText}>"Children learn as they play. Most importantly, in play children learn how to learn."</p>
            <footer style={styles.quoteAuthor}>— Fred Donaldson</footer>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;