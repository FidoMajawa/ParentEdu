const Feedback = () => {
    const styles = {
      container: {
        minHeight: "100vh",
        padding: "24px",
        background: "linear-gradient(to bottom, #ebf8ff, #f3e8ff)",
        display: "flex",
        justifyContent: "center",
      },
      contentWrapper: {
        maxWidth: "64rem",
        width: "100%",
      },
      header: {
        textAlign: "center",
        marginBottom: "40px",
      },
      title: {
        fontSize: "2.5rem",
        fontWeight: "800",
        marginBottom: "12px",
        background: "linear-gradient(to right, #2563eb, #7c3aed)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      description: {
        fontSize: "1.125rem",
        color: "#4a5568",
      },
      feedbackCard: {
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer",
      },
      feedbackHover: {
        transform: "scale(1.02)",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
      },
      feedbackHeader: {
        display: "flex",
        alignItems: "start",
      },
      emojiContainer: {
        fontSize: "1.75rem",
        marginRight: "16px",
        background: "rgba(255, 255, 255, 0.5)",
        padding: "12px",
        borderRadius: "50%",
      },
      teacherInfo: {
        flex: 1,
      },
      teacherName: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        color: "#2d3748",
      },
      subjectTag: {
        display: "inline-block",
        padding: "6px 12px",
        fontSize: "0.875rem",
        fontWeight: "600",
        background: "rgba(255, 255, 255, 0.7)",
        borderRadius: "9999px",
        marginTop: "4px",
        marginBottom: "8px",
      },
      message: {
        marginTop: "8px",
        color: "#4a5568",
      },
      formContainer: {
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "24px",
        border: "2px solid #ffeb3b",
        textAlign: "center",
      },
      formInput: {
        width: "100%",
        padding: "12px",
        border: "2px solid #cbd5e0",
        borderRadius: "8px",
        transition: "border 0.2s ease-in-out",
      },
      formButton: {
        width: "100%",
        padding: "12px",
        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        color: "white",
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.2s ease-in-out",
      },
    };
  
    const feedbackMessages = [
      {
        teacher: "Ms. Johnson",
        subject: "Math",
        message: "Great progress with addition! Let's work on subtraction next week.",
        date: "2 days ago",
        emoji: "➕➖",
        background: "#dbeafe",
        borderColor: "#2563eb",
      },
      {
        teacher: "Mr. Davis",
        subject: "Reading",
        message: "Loved the creative story you wrote! Your imagination is wonderful.",
        date: "1 week ago",
        emoji: "📚✨",
        background: "#f3e8ff",
        borderColor: "#7c3aed",
      },
      {
        teacher: "Ms. Garcia",
        subject: "Science",
        message: "Excellent participation in our plant experiment! You asked smart questions.",
        date: "3 days ago",
        emoji: "🌱🔬",
        background: "#d1fae5",
        borderColor: "#059669",
      },
    ];
  
    return (
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.header}>
            <h1 style={styles.title}>Personalized Feedback</h1>
            <p style={styles.description}>
              Teachers share progress updates and celebrate your child's achievements
            </p>
          </div>
  
          <div>
            {feedbackMessages.map((feedback, index) => (
              <div 
                key={index} 
                style={{ 
                  ...styles.feedbackCard, 
                  background: feedback.background,
                  borderLeft: `4px solid ${feedback.borderColor}`
                }}
              >
                <div style={styles.feedbackHeader}>
                  <div style={styles.emojiContainer}>{feedback.emoji}</div>
                  <div style={styles.teacherInfo}>
                    <h3 style={styles.teacherName}>{feedback.teacher}</h3>
                    <span style={styles.subjectTag}>{feedback.subject}</span>
                    <p style={styles.message}>{feedback.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Feedback;
  