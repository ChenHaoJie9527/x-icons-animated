"use client";

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
	return (
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
				onChange={(e) => onChange(e.target.value)}
				placeholder="Search icons..."
				type="text"
				value={value}
			/>
		</div>
	);
}
