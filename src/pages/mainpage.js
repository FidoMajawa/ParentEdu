import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { 
      value: 12, 
      label: "Activities", 
      icon: "✅", 
      color: { backgroundColor: '#D1FAE5', color: '#065F46' },
      path: "/activities"
    },
    { 
      value: 3, 
      label: "New Messages", 
      icon: "✉️", 
      color: { backgroundColor: '#DBEAFE', color: '#1E40AF' },
      path: "/notifications"
    },
    { 
      value: 5, 
      label: "Videos", 
      icon: "📺", 
      color: { backgroundColor: '#EDE9FE', color: '#5B21B6' },
      path: "/videos"
    },
    { 
      value: 2, 
      label: "Feedback", 
      icon: "⏳", 
      color: { backgroundColor: '#FEF3C7', color: '#92400E' },
      path: "/feedback"
    }
  ];

  const recentNotifications = [
    { text: "New feedback from Teacher Sarah", time: "2h ago", read: false, path: "/feedback" },
    { text: "Activity 'Count objects at home' due tomorrow", time: "1d ago", read: true, path: "/activities" },
    { text: "New video added: 'Science Experiments'", time: "3d ago", read: true, path: "/videos" }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #EFF6FF, #F3E8FF)', padding: '1rem' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', background: 'linear-gradient(to right, #2563EB, #9333EA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Parent Dashboard
          </h1>
          <p style={{ color: '#6B7280', marginTop: '0.5rem' }}>Welcome back! Here's what's happening today.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {stats.map((stat, index) => (
            <Link 
              to={stat.path} 
              key={index} 
              style={{ 
                padding: '1rem', 
                borderRadius: '0.75rem', 
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                ...stat.color 
              }}
              className="hover:scale-105 hover:shadow-md"
            >
              <span style={{ fontSize: '1.5rem', marginRight: '0.75rem' }}>{stat.icon}</span>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem' }}>{stat.label}</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '0.75rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#374151' }}>Recent Notifications</h2>
            <Link to="/notifications" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '500' }}>View All</Link>
          </div>
          <div>
            {recentNotifications.map((notification, index) => (
              <Link 
                to={notification.path} 
                key={index} 
                style={{ 
                  padding: '0.75rem', 
                  borderRadius: '0.5rem', 
                  background: notification.read ? '#F9FAFB' : '#DBEAFE', 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '0.5rem',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s'
                }}
                className="hover:bg-blue-50"
              >
                <div style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', marginRight: '0.75rem', background: notification.read ? '#9CA3AF' : '#2563EB' }}></div>
                <div>
                  <p style={{ fontWeight: notification.read ? 'normal' : 'bold', color: '#374151' }}>{notification.text}</p>
                  <p style={{ fontSize: '0.75rem', color: '#6B7280' }}>{notification.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;