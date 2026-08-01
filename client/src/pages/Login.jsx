import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            const response = await API.post("/users/login", formData);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            setMessage({ text: "Login successful! Redirecting...", type: "success" });
            setTimeout(() => navigate("/"), 800);
        } catch (error) {
            setMessage({
                text: error.response?.data?.message || "Login Failed",
                type: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-animated relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-4">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/8 blur-[100px]" />

            <div className="relative z-10 w-full max-w-md">
                {/* Glass card */}
                <div className="glass-card glow-brand rounded-3xl p-8 sm:p-10">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-2xl shadow-lg shadow-brand-500/30">
                            🔐
                        </div>
                        <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
                        <p className="mt-2 text-sm text-white/40">Sign in to your account</p>
                    </div>

                    {/* Message */}
                    {message.text && (
                        <div
                            className={`mb-6 rounded-xl border px-4 py-3 text-sm font-medium ${
                                message.type === "success"
                                    ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                                    : "border-red-500/20 bg-red-500/10 text-red-400"
                            }`}
                        >
                            {message.text}
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        <div>
                            <label htmlFor="login-email" className="mb-2 block text-sm font-medium text-white/60">
                                Email Address
                            </label>
                            <input
                                id="login-email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-brand-500/50 focus:bg-white/8"
                            />
                        </div>

                        <div>
                            <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-white/60">
                                Password
                            </label>
                            <input
                                id="login-password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-brand-500/50 focus:bg-white/8"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-pulse w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-brand-500/25 disabled:hover:brightness-100"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                "Sign In"
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-8 text-center text-sm text-white/30">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-brand-400 transition-colors duration-200 hover:text-brand-300"
                        >
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;