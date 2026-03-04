"use client";

import { Button } from "@base-ui/react";
import { cn } from "@x-icons/utils/cn";
import { useEffect, useState } from "react";
import { Tooltip } from "@/components/tooltip";
import { MoonIcon } from "@/icons/moon";
import { SunIcon } from "@/icons/sun";

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
					{isDark ? <SunIcon /> : <MoonIcon />}
				</Button>
			</div>
		</Tooltip>
	);
}
