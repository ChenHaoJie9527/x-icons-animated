"use client";

import { getIcons } from "@x-icons/icons/actions/get-icons";
import { Footer } from "@x-icons/ui/footer";
import { Header } from "@x-icons/ui/header";
import { IconList } from "@x-icons/ui/icon-list";
import { Main } from "@x-icons/ui/main";
import { Sidebar } from "@x-icons/ui/sidebar";
import { useState } from "react";
import { AppSidebar } from "./_components/sidebar";
import { ThemeToggle } from "./_components/theme-toggle";

const icons = getIcons();

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<div className="flex flex-col min-h-screen bg-background">
			<Header>
				{/* Logo 和标识 */}
				<div className="flex items-center gap-3 shrink-0">
					<span className="text-[15px] font-bold tracking-tight text-foreground leading-none">
						x-icons
					</span>
					<span className="text-[10px] font-(family-name:--font-geist-mono) text-primary border border-primary px-2 py-1 rounded tracking-widest uppercase leading-none">
						animated
					</span>
				</div>

				{/* 搜索框 */}
				<div className="flex-1 max-w-md relative">
					<svg
						aria-hidden
						className="absolute left-3 top-1/2 -translate-y-1/2 size-[14px] text-subtle pointer-events-none"
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
						className="w-full bg-surface border border-border rounded pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-subtle focus:outline-none focus:border-border-hover focus:bg-surface-hover transition-all font-(family-name:--font-geist-mono)"
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search icons..."
						type="text"
						value={search}
					/>
				</div>

				{/* 右侧操作区 */}
				<div className="ml-auto flex items-center gap-5">
					<span className="text-xs font-(family-name:--font-geist-mono) text-muted tabular-nums hidden sm:inline">
						{icons.length} {icons.length === 1 ? "icon" : "icons"}
					</span>
					<div className="w-px h-4 bg-border hidden sm:block" />
					<ThemeToggle />
					<a
						className="text-sm text-muted hover:text-primary transition-colors hidden md:inline"
						href="https://github.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						GitHub
					</a>
				</div>
			</Header>

			<Main>
				<div className="flex min-h-0">
					<Sidebar>
						<AppSidebar searchValue={search} totalIcons={icons.length} />
					</Sidebar>
					<div className="flex-1 overflow-auto">
						<IconList icons={icons} searchValue={search} />
					</div>
				</div>
			</Main>

			<Footer>
				<span className="text-xs font-(family-name:--font-geist-mono) text-muted">
					© 2025 x-icons — MIT License
				</span>
				<span className="text-xs font-(family-name:--font-geist-mono) text-subtle hidden sm:inline">
					crafted with motion
				</span>
			</Footer>
		</div>
	);
}
