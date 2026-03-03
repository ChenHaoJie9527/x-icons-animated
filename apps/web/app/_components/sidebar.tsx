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
		<div className="flex flex-col h-full">
			<div className="p-5 flex flex-col gap-6 flex-1 overflow-y-auto">
				<section>
					<p className="text-[11px] font-(family-name:--font-geist-mono) text-[var(--subtle)] uppercase tracking-[0.12em] mb-3">
						Browse
					</p>
					<ul className="flex flex-col gap-0.5">
						{CATEGORIES.map((cat) => (
							<li key={cat.value}>
								<button
									className="w-full flex items-center justify-between px-3 py-2 rounded text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors text-left"
									type="button"
								>
									<span>{cat.label}</span>
									{cat.value === "all" && (
										<span className="font-(family-name:--font-geist-mono) text-xs text-[var(--subtle)] tabular-nums">
											{totalIcons}
										</span>
									)}
								</button>
							</li>
						))}
					</ul>
				</section>

				<div className="h-px bg-[var(--border)]" />

				<section>
					<p className="text-[11px] font-(family-name:--font-geist-mono) text-[var(--subtle)] uppercase tracking-[0.12em] mb-3">
						Install
					</p>
					<div className="border border-[var(--border)] rounded p-3 bg-[var(--surface)]">
						<code className="text-xs font-(family-name:--font-geist-mono) text-[var(--muted)] block leading-6">
							pnpm add @x-icons/icons
						</code>
					</div>
				</section>

				{isSearching && (
					<>
						<div className="h-px bg-[var(--border)]" />
						<section>
							<p className="text-[11px] font-(family-name:--font-geist-mono) text-[var(--subtle)] uppercase tracking-[0.12em] mb-2">
								Query
							</p>
							<p className="text-sm font-(family-name:--font-geist-mono) text-[var(--muted)] break-all">
								&ldquo;{searchValue}&rdquo;
							</p>
						</section>
					</>
				)}
			</div>

			<div className="p-5 border-t border-[var(--border)] shrink-0">
				<p className="text-xs font-(family-name:--font-geist-mono) text-[var(--subtle)]">
					MIT License · Open Source
				</p>
			</div>
		</div>
	);
}
