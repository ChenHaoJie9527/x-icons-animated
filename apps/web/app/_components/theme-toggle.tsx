"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle("dark", shouldBeDark);
	}, []);

	const toggleTheme = () => {
		const newIsDark = !isDark;
		setIsDark(newIsDark);
		document.documentElement.classList.toggle("dark", newIsDark);
		localStorage.setItem("theme", newIsDark ? "dark" : "light");
	};

	return (
		<button
			aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
			className="flex items-center justify-center size-8 rounded hover:bg-[var(--surface-hover)] transition-colors"
			onClick={toggleTheme}
			type="button"
		>
			{isDark ? (
				<svg
					className="size-4"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
				>
					<circle cx={12} cy={12} r={4} />
					<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
				</svg>
			) : (
				<svg
					className="size-4"
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					viewBox="0 0 24 24"
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
				</svg>
			)}
		</button>
	);
}
