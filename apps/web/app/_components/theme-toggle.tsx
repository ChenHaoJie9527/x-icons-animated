"use client";

import { Switch } from "@x-icons/ui/switch";
import { Tooltip } from "@x-icons/ui/tooltip";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		const savedTheme = localStorage.getItem("theme");
		const prefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

		setIsDark(shouldBeDark);
		document.documentElement.classList.toggle("dark", shouldBeDark);
	}, []);

	const toggleTheme = (checked: boolean) => {
		setIsDark(checked);
		document.documentElement.classList.toggle("dark", checked);
		localStorage.setItem("theme", checked ? "dark" : "light");
	};

	if (!mounted) {
		return <div className="size-9 rounded bg-surface animate-pulse" />;
	}

	return (
		<Tooltip
			content={isDark ? "Switch to light mode" : "Switch to dark mode"}
			side="bottom"
		>
			<div className="flex items-center gap-2">
				{!isDark && (
					<svg
						aria-hidden
						className="size-4 text-muted"
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
				)}
				<Switch checked={isDark} onCheckedChange={toggleTheme} />
				{isDark && (
					<svg
						aria-hidden
						className="size-4 text-muted"
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
			</div>
		</Tooltip>
	);
}
