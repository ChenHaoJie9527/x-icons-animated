"use client";

import { getIcons } from "@x-icons/icons/actions/get-icons";
// import { IconList } from "@x-icons/ui/icon-list";
import { useState } from "react";
import { ThemeToggle } from "./_components/theme-toggle";

const icons = getIcons();

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<section className="grid w-full h-full grid-rows-[auto_1fr_auto] gap-2">
			<header className=" flex items-center gap-8 h-14 py-3">
				{/* Logo */}
				<div className="flex items-center gap-2 shrink-0">
					<span className="text-xl font-semibold text-foreground">x-icons</span>
					<span className="px-2 py-0.5 text-xs bg-primary text-background rounded-full">
						animated
					</span>
				</div>

				{/* Search */}
				<div className="relative flex-1 max-w-lg">
					<svg
						aria-hidden
						className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted pointer-events-none"
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
						className="w-full h-10 pl-11 pr-4 text-sm bg-surface border border-border rounded-lg text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors"
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search icons..."
						type="text"
						value={search}
					/>
				</div>

				{/* Actions */}
				<div className="flex items-center gap-4 shrink-0">
					<span className="text-sm text-muted md:hidden">
						{icons.length} {icons.length === 1 ? "icon" : "icons"}
					</span>
					<div className="w-px h-6 bg-border" />
					<ThemeToggle />
					<a
						className="text-sm text-foreground hover:text-primary transition-colors"
						href="https://github.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub
					</a>
				</div>
			</header>

			<main>{/* <IconList icons={icons} searchValue={search} /> */}</main>

			<footer>
				<div className="flex items-center justify-between py-4">
					<span className="text-sm text-muted">
						© 2025 x-icons — MIT License
					</span>
					<span className="text-sm text-muted">crafted with motion</span>
				</div>
			</footer>
		</section>
	);
}
