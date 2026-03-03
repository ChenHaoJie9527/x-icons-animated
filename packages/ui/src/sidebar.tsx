import { cn } from "@x-icons/utils/cn";

interface SidebarProps {
	children: React.ReactNode;
	className?: string;
	side?: "left" | "right";
}

export function Sidebar({ children, className, side = "left" }: SidebarProps) {
	return (
		<aside
			className={cn(
				"hidden md:block w-60 shrink-0",
				side === "left" ? "border-r border-border" : "border-l border-border",
				className
			)}
		>
			{children}
		</aside>
	);
}
