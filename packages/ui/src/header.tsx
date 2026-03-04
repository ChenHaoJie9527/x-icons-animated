import { cn } from "@x-icons/utils/cn";

interface HeaderProps {
	children: React.ReactNode;
	className?: string;
}

export function Header({ children, className }: HeaderProps) {
	return (
		<header
			className={cn(
				"sticky top-0 z-40 w-full  bg-(--background)/95 backdrop-blur",
				className
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center h-14 gap-8 py-3">{children}</div>
			</div>
		</header>
	);
}
