import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: "", type: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ text: "", type: "" });

        try {
            const response = await API.post("/users/register", formData);
            setMessage({ text: "Account created! Redirecting to login...", type: "success" });
            setTimeout(() => navigate("/login"), 1200);
        } catch (error) {
            setMessage({
                text: error.response?.data?.message || "Registration Failed",
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
                            ✨
                        </div>
                        <h2 className="text-2xl font-bold text-white">Create Account</h2>
                        <p className="mt-2 text-sm text-white/40">Join thousands of happy shoppers</p>
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
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="register-name" className="mb-2 block text-sm font-medium text-white/60">
                                Full Name
                            </label>
                            <input
                                id="register-name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-glow w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-brand-500/50 focus:bg-white/8"
                            />
                        </div>

                        <div>
                            <label htmlFor="register-email" className="mb-2 block text-sm font-medium text-white/60">
                                Email Address
                            </label>
                            <input
                                id="register-email"
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
                            <label htmlFor="register-password" className="mb-2 block text-sm font-medium text-white/60">
                                Password
                            </label>
                            <input
                                id="register-password"
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
                                    Creating account...
                                </span>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-xs text-white/20">or</span>
                        <div className="h-px flex-1 bg-white/10" />
                    </div>

                    {/* Footer */}
                    <p className="text-center text-sm text-white/30">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-brand-400 transition-colors duration-200 hover:text-brand-300"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
