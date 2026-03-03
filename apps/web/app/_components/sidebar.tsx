interface SidebarProps {
	totalIcons: number;
	searchValue: string;
}

const CATEGORIES = [
	{ label: "All Icons", value: "all" },
	{ label: "Actions", value: "actions" },
	{ label: "Navigation", value: "navigation" },
	{ label: "Interface", value: "interface" },
	{ label: "Media", value: "media" },
];

export function AppSidebar({ totalIcons, searchValue }: SidebarProps) {
	const isSearching = searchValue.trim().length > 0;

	return (
		<aside className="w-60 border-r border-white/[0.08] shrink-0 overflow-y-auto flex flex-col">
			<div className="p-5 flex flex-col gap-6 flex-1">
				<section>
					<p className="text-[11px] font-(family-name:--font-geist-mono) text-white/25 uppercase tracking-[0.12em] mb-3">
						Browse
					</p>
					<ul className="flex flex-col gap-0.5">
						{CATEGORIES.map((cat) => (
							<li key={cat.value}>
								<button
									className="w-full flex items-center justify-between px-3 py-2 rounded text-sm text-white/45 hover:text-white hover:bg-white/5 transition-colors text-left"
									type="button"
								>
									<span>{cat.label}</span>
									{cat.value === "all" && (
										<span className="font-(family-name:--font-geist-mono) text-xs text-white/20 tabular-nums">
											{totalIcons}
										</span>
									)}
								</button>
							</li>
						))}
					</ul>
				</section>

				<div className="h-px bg-white/[0.06]" />

				<section>
					<p className="text-[11px] font-(family-name:--font-geist-mono) text-white/25 uppercase tracking-[0.12em] mb-3">
						Install
					</p>
					<div className="border border-white/[0.08] rounded p-3 bg-white/[0.02]">
						<code className="text-xs font-(family-name:--font-geist-mono) text-white/50 block leading-6">
							pnpm add @x-icons/icons
						</code>
					</div>
				</section>

				{isSearching && (
					<>
						<div className="h-px bg-white/[0.06]" />
						<section>
							<p className="text-[11px] font-(family-name:--font-geist-mono) text-white/25 uppercase tracking-[0.12em] mb-2">
								Query
							</p>
							<p className="text-sm font-(family-name:--font-geist-mono) text-white/50 break-all">
								&ldquo;{searchValue}&rdquo;
							</p>
						</section>
					</>
				)}
			</div>

			<div className="p-5 border-t border-white/[0.06]">
				<p className="text-xs font-(family-name:--font-geist-mono) text-white/20">
					MIT License · Open Source
				</p>
			</div>
		</aside>
	);
}
