"use client";

import { Button } from "@base-ui/react";
import { SunIcon } from "@x-icons/icons/sun";
import { cn } from "@x-icons/utils/cn";
import { useEffect, useState } from "react";
import { Tooltip } from "./tooltip";

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
				<Button
					className={cn(
						"size-9 rounded bg-surface flex items-center justify-center border",
						isDark ? "border-primary" : "border-border"
					)}
					onClick={() => toggleTheme(!isDark)}
				>
					{isDark ? (
						<SunIcon />
					) : (
						<svg
							fill="none"
							stroke="currentColor"
							stroke-width="1"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="size-4"
						>
							<path
								d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					)}
				</Button>
			</div>
		</Tooltip>
	);
}
