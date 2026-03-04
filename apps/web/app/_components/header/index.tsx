import type { IconMeta } from "@x-icons/icons/types";
import { ThemeToggle } from "../theme-toggle";

type Icon = Pick<IconMeta, "name" | "keywords">;

interface HeaderProps {
	icons: Icon[];
}

export function Header({ icons }: HeaderProps) {
	return (
		<header className="flex items-center gap-8 h-14 py-3 mx-auto container justify-between">
			<div className="flex items-center gap-2 shrink-0">
				<span className="text-xl font-semibold text-foreground">x-icons</span>
				<span className="px-2 py-0.5 text-xs bg-primary text-background rounded-full">
					animated
				</span>
			</div>

			{/* <SearchBar onChange={setSearch} value={search} /> */}

			<div className="flex items-center gap-4 shrink-0">
				<span className="text-sm text-muted md:hidden">
					{icons.length} {icons.length === 1 ? "icon" : "icons"}
				</span>
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
	);
}
