const sampleActivities = [
    { 
      title: "Name 5 things on the way to school", 
      completed: true,
      category: "Observation",
      emoji: "👀",
      color: { background: "linear-gradient(to right, #d1fae5, #99f6e4)" }
    },
    { 
      title: "Count objects at home", 
      completed: false,
      category: "Math",
      emoji: "💻",
      color: { background: "linear-gradient(to right, #bfdbfe, #818cf8)" }
    },
    { 
      title: "Draw your favorite animal", 
      completed: false,
      category: "Art",
      emoji: "🎨",
      color: { background: "linear-gradient(to right, #e9d5ff, #fbcfe8)" }
    },
    { 
      title: "Read a story together", 
      completed: true,
      category: "Reading",
      emoji: "📚",
      color: { background: "linear-gradient(to right, #fef3c7, #fdba74)" }
    }
  ];
  
  const Activities = () => {
    return (
      <div style={{ minHeight: "100vh", padding: "1.5rem", background: "linear-gradient(to bottom, #eff6ff, #f3e8ff)" }}>
        <div style={{ maxWidth: "32rem", margin: "auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "0.75rem", backgroundClip: "text", color: "#4f46e5" }}>
              Fun Learning Activities
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#4b5563" }}>
              Engaging home-based activities for you and your child
            </p>
          </div>
  
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
            {sampleActivities.map((activity, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: "1rem", 
                  borderRadius: "0.75rem", 
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", 
                  borderLeft: `4px solid ${activity.completed ? "#10b981" : "#fbbf24"}`, 
                  ...activity.color
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ fontSize: "1.5rem", marginRight: "1rem", background: "rgba(255, 255, 255, 0.5)", padding: "0.5rem", borderRadius: "9999px" }}>
                    {activity.emoji}
                  </div>
                  <div style={{ flex: "1" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ fontWeight: "600", color: activity.completed ? "#065f46" : "#374151" }}>
                        {activity.title}
                      </h3>
                      <span style={{ fontSize: "0.875rem", padding: "0.25rem 0.5rem", borderRadius: "9999px", background: activity.completed ? "#a7f3d0" : "#fde68a", color: activity.completed ? "#065f46" : "#92400e" }}>
                        {activity.completed ? "Completed!" : "Pending"}
                      </span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                      <span style={{ fontSize: "0.875rem", padding: "0.25rem 0.5rem", background: "rgba(255, 255, 255, 0.7)", borderRadius: "9999px" }}>
                        {activity.category}
                      </span>
                      <button 
                        style={{ 
                          fontSize: "0.875rem", 
                          padding: "0.25rem 0.75rem", 
                          borderRadius: "9999px", 
                          background: activity.completed ? "white" : "linear-gradient(to right, #3b82f6, #8b5cf6)",
                          color: activity.completed ? "#065f46" : "white",
                          border: activity.completed ? "1px solid #10b981" : "none",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)"
                        }}
                      >
                        {activity.completed ? "✓ Done" : "Mark Complete"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Activities;