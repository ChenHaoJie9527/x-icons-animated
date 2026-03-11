"use client";

import { Button } from "@base-ui/react";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/icons/heroicons/github";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";
import type { IconMeta } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "name" | "keywords">;

interface HeaderProps {
	icons: Icon[];
	onSearchChange?: (value: string) => void;
	searchValue?: string;
}

export function Header({
	icons,
	onSearchChange,
	searchValue = "",
}: HeaderProps) {
	return (
		<header className="sticky top-0 z-50 container mx-auto flex h-14 items-center justify-between gap-4 bg-background/95 py-3 backdrop-blur">
			<motion.div
				className="flex items-center gap-2 shrink-0"
				{...PAGE_ANIMATIONS.headerLeft}
			>
				<span className="text-xl font-semibold text-foreground">x-icons</span>
				<span className="px-2 py-0.5 text-xs bg-primary text-background rounded-full">
					animated
				</span>
			</motion.div>

			<motion.div
				className="hidden flex-1 justify-center md:flex"
				{...PAGE_ANIMATIONS.heroSearch}
			>
				<div className="relative w-full max-w-xl">
					<svg
						aria-hidden
						className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted pointer-events-none"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
					>
						<circle cx={11} cy={11} r={8} />
						<path d="m21 21-4.35-4.35" />
					</svg>
					<input
						aria-label="Search icons"
						className="h-10 w-full rounded-xl border border-border bg-surface pl-11 pr-4 text-sm text-foreground placeholder:text-muted outline-none transition-colors focus:border-primary"
						onChange={(e) => onSearchChange?.(e.target.value)}
						placeholder={`Search ${icons.length} icons...`}
						type="text"
						value={searchValue}
					/>
				</div>
			</motion.div>

			<motion.div
				className="flex items-center gap-4 shrink-0"
				{...PAGE_ANIMATIONS.headerRight}
			>
				<span className="text-sm text-muted md:hidden">
					{icons.length} {icons.length === 1 ? "icon" : "icons"}
				</span>
				<ThemeToggle />
				<Button className="text-sm text-foreground hover:text-primary transition-colors border-border border bg-surface  rounded size-9 flex items-center justify-center">
					<GithubIcon size={24} />
				</Button>
			</motion.div>
		</header>
	);
}
