import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            if (email === "parent@example.com" || email === "teacher@example.com") {
                navigate("Home");
            } else {
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className={`login-container ${shake ? "shake-animation" : ""}`}>
            <div className="login-box">
                <div className="login-header">
                    <h1>Welcome Back!</h1>
                    <p>Login to access your parent dashboard</p>
                </div>

                <div className="login-form">
                    <div className="input-container">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="parent@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-container">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        disabled={isLoading}
                        className={`login-button ${isLoading ? "loading" : ""}`}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>

                    <div className="divider">
                        <span>or</span>
                    </div>

                    <div className="social-login">
                        <button className="social-button google">
                            <span>🔵</span> Google
                        </button>
                        <button className="social-button facebook">
                            <span>🔷</span> Facebook
                        </button>
                    </div>
                </div>

                <div className="footer">
                    <p>
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </div>

                <div className="demo-credentials">
                    <p>Demo credentials:</p>
                    <p>parent@example.com / teacher@example.com</p>
                    <p>(Any password works)</p>
                </div>
            </div>

            <style jsx>{`
                /* Login container */
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: linear-gradient(to bottom right, #e0f7fa, #eceff1);
                }

                .login-box {
                    width: 100%;
                    max-width: 400px;
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 30px;
                }

                .login-header {
                    text-align: center;
                    background: linear-gradient(to right, #00796b, #004d40);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                }

                .login-header h1 {
                    font-size: 2rem;
                    margin-bottom: 10px;
                }

                .login-header p {
                    font-size: 1rem;
                    margin-top: 0;
                }

                .login-form {
                    margin-top: 20px;
                }

                .input-container {
                    margin-bottom: 20px;
                }

                .input-container label {
                    display: block;
                    font-size: 1rem;
                    margin-bottom: 5px;
                    color: #555;
                }

                .input-container input {
                    width: 100%;
                    padding: 10px;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    font-size: 1rem;
                    margin-top: 5px;
                }

                .input-container input:focus {
                    border-color: #00796b;
                    outline: none;
                }

                .login-button {
                    width: 100%;
                    padding: 12px;
                    background-color: #00796b;
                    color: white;
                    font-weight: bold;
                    font-size: 1.2rem;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .login-button:hover {
                    background-color: #004d40;
                }

                .login-button:disabled {
                    background-color: #80cbc4;
                    cursor: not-allowed;
                }

                .login-button.loading {
                    background-color: #004d40;
                }

                .divider {
                    text-align: center;
                    margin: 20px 0;
                }

                .divider span {
                    font-size: 1rem;
                    color: #555;
                }

                .social-login {
                    display: flex;
                    justify-content: space-between;
                }

                .social-button {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    width: 48%;
                    border-radius: 8px;
                    border: 1px solid #ddd;
                    cursor: pointer;
                    background-color: white;
                    transition: background-color 0.3s;
                }

                .social-button:hover {
                    background-color: #e0f2f1;
                }

                .social-button span {
                    margin-right: 8px;
                    font-size: 1.2rem;
                }

                .google {
                    color: #4285f4;
                }

                .facebook {
                    color: #3b5998;
                }

                .footer {
                    text-align: center;
                    margin-top: 20px;
                }

                .footer a {
                    color: #00796b;
                    text-decoration: none;
                    font-weight: bold;
                }

                .footer a:hover {
                    text-decoration: underline;
                }

                .demo-credentials {
                    margin-top: 20px;
                    padding: 10px;
                    background-color: #e0f7fa;
                    border-radius: 8px;
                    text-align: center;
                }

                .demo-credentials p {
                    font-size: 1rem;
                    color: #00796b;
                }

                /* Shake animation for login failure */
                @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                    100% { transform: translateX(0); }
                }

                .shake-animation {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Login;
