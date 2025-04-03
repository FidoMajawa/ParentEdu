const sampleVideos = [
    { 
      title: "Phonics Fun Adventure", 
      link: "https://youtu.be/yN8IHiz1j-s",
      thumbnail: "🔤",
      color: "linear-gradient(to right, #facc15, #fb923c)",
      category: "Reading"
    },
    { 
      title: "Counting 1-10 with Animals", 
      link: "https://youtu.be/Yt8GFgxlITs?list=RDYt8GFgxlITs",
      thumbnail: "🐘",
      color: "linear-gradient(to right, #60a5fa, #a78bfa)",
      category: "Math"
    },
    { 
      title: "Science Experiments for Kids", 
      link: "https://youtu.be/hGwG--GZEfw",
      thumbnail: "🧪",
      color: "linear-gradient(to right, #34d399, #2dd4bf)",
      category: "Science"
    },
    { 
      title: "Art & Creativity Time", 
      link: "https://youtu.be/ws6BR741ios",
      thumbnail: "🎨",
      color: "linear-gradient(to right, #f472b6, #ef4444)",
      category: "Art"
    },
  ];
  
  const Videos = () => {
    const styles = {
      container: {
        minHeight: "100vh",
        padding: "5%",
        background: "linear-gradient(to bottom, #ebf8ff, #f3e8ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      content: {
        maxWidth: "60rem",
        width: "90%",
        textAlign: "center",
      },
      title: {
        fontSize: "clamp(2rem, 5vw, 2.5rem)",
        fontWeight: "800",
        marginBottom: "24px",
        background: "linear-gradient(to right, #2563eb, #7c3aed)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
      description: {
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        color: "#4a5568",
        marginBottom: "32px",
      },
      grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "24px",
        width: "100%",
      },
      videoCard: (color) => ({
        display: "block",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
        background: color,
        color: "white",
      }),
      videoContent: {
        padding: "24px",
        display: "flex",
        alignItems: "center",
      },
      thumbnail: {
        fontSize: "2rem",
        marginRight: "16px",
        background: "rgba(255, 255, 255, 0.2)",
        padding: "12px",
        borderRadius: "50%",
      },
      category: {
        display: "inline-block",
        padding: "4px 8px",
        fontSize: "0.75rem",
        fontWeight: "bold",
        background: "rgba(255, 255, 255, 0.3)",
        borderRadius: "9999px",
        marginBottom: "4px",
      },
      button: {
        marginTop: "40px",
        padding: "12px 24px",
        fontSize: "clamp(0.875rem, 2vw, 1rem)",
        fontWeight: "bold",
        borderRadius: "9999px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        color: "white",
        border: "none",
        cursor: "pointer",
        transition: "transform 0.2s ease-in-out",
      },
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Interactive Learning Videos</h1>
          <p style={styles.description}>
            Fun educational videos for kids with parent guides
          </p>
          
          <div style={styles.grid}>
            {sampleVideos.map((video, index) => (
              <a 
                key={index} 
                href={video.link} 
                style={{ ...styles.videoCard(video.color) }}
              >
                <div style={styles.videoContent}>
                  <div style={styles.thumbnail}>{video.thumbnail}</div>
                  <div>
                    <span style={styles.category}>{video.category}</span>
                    <h3>{video.title}</h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <button style={styles.button}>View All Videos</button>
        </div>
      </div>
    );
  };
  
  export default Videos;