"use client";

import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
	searchValue: string;
	onSearchChange: (value: string) => void;
	totalIcons: number;
}

export function AppHeader({
	searchValue,
	onSearchChange,
	totalIcons,
}: HeaderProps) {
	return (
		<header className="flex items-center h-14 px-6 border-b border-[var(--border)] shrink-0 gap-8">
			<div className="flex items-center gap-3 shrink-0">
				<span className="text-[15px] font-bold tracking-tight text-[var(--foreground)] leading-none">
					x-icons
				</span>
				<span className="text-[10px] font-(family-name:--font-geist-mono) text-[var(--primary)] border border-[var(--primary)] px-2 py-1 rounded tracking-widest uppercase leading-none">
					animated
				</span>
			</div>

			<div className="flex-1 max-w-xs relative">
				<svg
					aria-hidden
					className="absolute left-3 top-1/2 -translate-y-1/2 size-[14px] text-[var(--subtle)] pointer-events-none"
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
					className="w-full bg-[var(--surface)] border border-[var(--border)] rounded pl-9 pr-4 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--subtle)] focus:outline-none focus:border-[var(--border-hover)] focus:bg-[var(--surface-hover)] transition-all font-(family-name:--font-geist-mono)"
					onChange={(e) => onSearchChange(e.target.value)}
					placeholder="Search icons..."
					type="text"
					value={searchValue}
				/>
			</div>

			<div className="ml-auto flex items-center gap-5">
				<span className="text-xs font-(family-name:--font-geist-mono) text-[var(--muted)] tabular-nums">
					{totalIcons} {totalIcons === 1 ? "icon" : "icons"}
				</span>
				<div className="w-px h-4 bg-[var(--border)]" />
				<ThemeToggle />
				<a
					className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
					href="https://github.com"
					rel="noopener noreferrer"
					target="_blank"
				>
					GitHub
				</a>
			</div>
		</header>
	);
}
