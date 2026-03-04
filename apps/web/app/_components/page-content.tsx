"use client";

import type { IconMeta } from "@x-icons/icons/types";
import { useState } from "react";
import { IconList } from "./icon-list";
import { SearchBar } from "./search-bar";
import { ThemeToggle } from "./theme-toggle";

type Icon = Pick<IconMeta, "name" | "keywords">;

interface PageContentProps {
	icons: Icon[];
}

export function PageContent({ icons }: PageContentProps) {
	const [search, setSearch] = useState("");

	return (
		<section className="grid w-full h-full grid-rows-[auto_1fr_auto] gap-2">
			<header className="flex items-center gap-8 h-14 py-3">
				<div className="flex items-center gap-2 shrink-0">
					<span className="text-xl font-semibold text-foreground">x-icons</span>
					<span className="px-2 py-0.5 text-xs bg-primary text-background rounded-full">
						animated
					</span>
				</div>

				<SearchBar onChange={setSearch} value={search} />

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

			<main>
				<IconList icons={icons} searchValue={search} />
			</main>

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
