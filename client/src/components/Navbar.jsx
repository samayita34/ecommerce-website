import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
        window.location.reload();
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-dark-800/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Brand */}
                <Link
                    to="/"
                    className="flex items-center gap-2 text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm shadow-lg shadow-brand-500/20">
                        🛒
                    </span>
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                        ShopEase
                    </span>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-1">
                    <Link
                        to="/"
                        className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            isActive("/")
                                ? "bg-white/10 text-white shadow-lg shadow-white/5"
                                : "text-white/50 hover:bg-white/5 hover:text-white/80"
                        }`}
                    >
                        Home
                    </Link>

                    {token ? (
                        <div className="flex items-center gap-3">
                            <span className="hidden text-sm text-white/40 sm:inline-block">
                                Hey, <span className="font-semibold text-brand-400">{user?.name?.split(" ")[0]}</span>
                            </span>
                            <button
                                onClick={handleLogout}
                                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-white hover:shadow-lg hover:shadow-brand-500/10"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                    isActive("/login")
                                        ? "bg-white/10 text-white shadow-lg shadow-white/5"
                                        : "text-white/50 hover:bg-white/5 hover:text-white/80"
                                }`}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="ml-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all duration-300 hover:shadow-brand-500/40 hover:brightness-110"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
