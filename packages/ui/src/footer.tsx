import { cn } from "@x-icons/utils/cn";

interface FooterProps {
	children: React.ReactNode;
	className?: string;
}

export function Footer({ children, className }: FooterProps) {
	return (
		<footer className={cn("w-full border-t border-border", className)}>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-4">{children}</div>
			</div>
		</footer>
	);
}
