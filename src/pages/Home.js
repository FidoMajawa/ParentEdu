import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/mainpage'); // Navigate to MainPage when the button is clicked
    };

    const styles = {
        homeContainer: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom right, #ebf8ff, #f3e8ff)",
            padding: "5%",
        },
        homeContent: {
            width: "90%",
            maxWidth: "40rem",
            textAlign: "center",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            padding: "8%",
            border: "4px solid #ffeb3b",
        },
        homeTitle: {
            fontSize: "clamp(2rem, 5vw, 2.5rem)",
            fontWeight: "800",
            marginBottom: "24px",
            background: "linear-gradient(to right, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        homeDescription: {
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#4a5568",
            marginBottom: "32px",
        },
        buttonGroup: {
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
        },
        button: {
            padding: "12px 24px",
            fontWeight: "bold",
            borderRadius: "9999px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "all 0.2s ease-in-out",
            cursor: "pointer",
            border: "none",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
        },
        primaryButton: {
            background: "#3b82f6",
            color: "white",
        },
        secondaryButton: {
            background: "#8b5cf6",
            color: "white",
        },
        iconGroup: {
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "5%",
            flexWrap: "wrap",
        },
        icon: {
            width: "clamp(50px, 10vw, 64px)",
            height: "clamp(50px, 10vw, 64px)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
        },
    };

    return (
        <div style={styles.homeContainer}>
            <div style={styles.homeContent}>
                <h1 style={styles.homeTitle}>Welcome to ParentEdu!</h1>
                <p style={styles.homeDescription}>
                    Engage in fun home-based learning, get helpful reminders, and track your progress together!
                </p>
                <div style={styles.buttonGroup}>
                    <button
                        style={{ ...styles.button, ...styles.primaryButton }}
                        onClick={handleGetStarted} // Call the navigation function on click
                    >
                        Get Started
                    </button>
                    <button style={{ ...styles.button, ...styles.secondaryButton }}>
                        Learn More
                    </button>
                </div>
                <div style={styles.iconGroup}>
                    <div style={{ ...styles.icon, background: "#facc15" }}>📚</div>
                    <div style={{ ...styles.icon, background: "#22c55e" }}>🎨</div>
                    <div style={{ ...styles.icon, background: "#ef4444" }}>⏰</div>
                    <div style={{ ...styles.icon, background: "#3b82f6" }}>📈</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
