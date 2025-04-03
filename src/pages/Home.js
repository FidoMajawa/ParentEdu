import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Images for the transition effect
    const educationImages = [
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    ];

    // Auto-rotate images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === educationImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [educationImages.length]);

    const handleGetStarted = () => {
        navigate('/mainpage');
    };

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            width: '100%',
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '1rem',
            textAlign: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            fontSize: '1.5rem',
            fontWeight: 'bold'
        },
        homeContainer: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom right, #ebf8ff, #f3e8ff)",
            padding: "5%",
            paddingTop: "80px" // Added to account for fixed header
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
        imageTransitionContainer: {
            width: '100%',
            maxWidth: '600px',
            height: '300px',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '32px',
            position: 'relative',
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
        },
        transitionImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 1s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0
        },
        featuresContainer: {
            marginTop: '40px',
            textAlign: 'left',
            width: '100%'
        },
        featureItem: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: '#f8fafc'
        },
        featureIcon: {
            marginRight: '12px',
            fontSize: '1.5rem'
        }
    };

    return (
        <>
            <header style={styles.header}>
                ParentEdu
            </header>
            
            <div style={styles.homeContainer}>
                <div style={styles.homeContent}>
                    <h1 style={styles.homeTitle}>Welcome to ParentEdu!</h1>
                    
                    <div style={styles.imageTransitionContainer}>
                        {educationImages.map((image, index) => (
                            <img 
                                key={index}
                                src={image}
                                alt={`Parent teaching child ${index + 1}`}
                                style={{
                                    ...styles.transitionImage,
                                    opacity: index === currentImageIndex ? 1 : 0,
                                    zIndex: index === currentImageIndex ? 1 : 0
                                }}
                            />
                        ))}
                    </div>
                    
                    <p style={styles.homeDescription}>
                        Engage in fun home-based learning, get helpful reminders, and track your progress together!
                    </p>
                    
                    <div style={styles.buttonGroup}>
                        <button
                            style={{ ...styles.button, ...styles.primaryButton }}
                            onClick={handleGetStarted}
                        >
                            Get Started
                        </button>
                        <button style={{ ...styles.button, ...styles.secondaryButton }}>
                            Learn More
                        </button>
                    </div>
                    
                    <div style={styles.featuresContainer}>
                        <h3 style={{ marginBottom: '20px', color: '#3b82f6' }}>Key Features:</h3>
                        <div style={styles.featureItem}>
                            <span style={styles.featureIcon}>📚</span>
                            <span>Interactive learning activities</span>
                        </div>
                        <div style={styles.featureItem}>
                            <span style={styles.featureIcon}>⏰</span>
                            <span>Customizable reminders</span>
                        </div>
                        <div style={styles.featureItem}>
                            <span style={styles.featureIcon}>📈</span>
                            <span>Progress tracking</span>
                        </div>
                        <div style={styles.featureItem}>
                            <span style={styles.featureIcon}>👪</span>
                            <span>Parent-child bonding activities</span>
                        </div>
                    </div>
                    
                    <div style={styles.iconGroup}>
                        <div style={{ ...styles.icon, background: "#facc15" }}>📚</div>
                        <div style={{ ...styles.icon, background: "#22c55e" }}>🎨</div>
                        <div style={{ ...styles.icon, background: "#ef4444" }}>⏰</div>
                        <div style={{ ...styles.icon, background: "#3b82f6" }}>📈</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;