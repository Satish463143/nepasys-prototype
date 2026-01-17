import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    // Initialize theme
    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";

        const initialTheme = savedTheme || systemTheme;
        setTheme(initialTheme);

        if (initialTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    if (!mounted) {
        return (
            <div className="w-9 h-9 flex items-center justify-center">
                {/* Placeholder to prevent layout shift */}
            </div>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300",
                "text-muted-foreground hover:text-foreground hover:bg-muted/50 focus:outline-none",
                "active:scale-95"
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <Sun
                    className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-500 transform",
                        theme === "dark"
                            ? "opacity-0 rotate-90 scale-0"
                            : "opacity-100 rotate-0 scale-100"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-500 transform",
                        theme === "dark"
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-0"
                    )}
                />
            </div>

            {/* Glow effect on hover */}
            <span className="absolute inset-0 rounded-full bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </button>
    );
};

export default ThemeToggle;
