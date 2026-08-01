import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const items = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 15,
            size: Math.random() * 4 + 2,
            duration: Math.random() * 15 + 10,
        }));
        setParticles(items);
    }, []);

    return (
        <div className="bg-animated relative min-h-[calc(100vh-73px)] overflow-hidden">
            {/* Floating particles */}
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        bottom: "-10px",
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                    }}
                />
            ))}

            {/* Radial glow backdrop */}
            <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

            {/* Hero Content */}
            <div className="relative z-10 flex min-h-[calc(100vh-73px)] flex-col items-center justify-center px-6 text-center">
                {/* Badge */}
                <div className="float mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-5 py-2 text-sm font-medium text-brand-300">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
                    {user ? "Welcome back!" : "New arrivals dropping soon"}
                </div>

                {/* Heading */}
                <h1 className="mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
                    {user ? (
                        <>
                            Hey{" "}
                            <span className="shimmer-text">{user.name}</span>
                            ,<br />
                            Ready to shop?
                        </>
                    ) : (
                        <>
                            The Future of{" "}
                            <span className="shimmer-text">Shopping</span>
                            <br />
                            Starts Here
                        </>
                    )}
                </h1>

                {/* Subheading */}
                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/40 sm:text-xl">
                    {user
                        ? "Explore curated collections, exclusive deals, and lightning-fast delivery — all in one place."
                        : "Discover premium products, unbeatable prices, and a seamless checkout experience. Join thousands of happy shoppers."}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {user ? (
                        <button className="btn-pulse group relative rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:scale-105">
                            <span className="relative z-10">Browse Products</span>
                            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </button>
                    ) : (
                        <>
                            <Link
                                to="/register"
                                className="btn-pulse group relative rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/25 transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10">Get Started Free</span>
                                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </Link>
                            <Link
                                to="/login"
                                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                Sign In →
                            </Link>
                        </>
                    )}
                </div>

                {/* Stats row */}
                <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/5 pt-10 sm:gap-16">
                    {[
                        { value: "10K+", label: "Products" },
                        { value: "50K+", label: "Customers" },
                        { value: "4.9★", label: "Rating" },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                            <div className="mt-1 text-sm text-white/30">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;