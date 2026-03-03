import { cn } from "@x-icons/utils/cn";

interface MainProps {
	children: React.ReactNode;
	className?: string;
	containerized?: boolean;
}

export function Main({ children, className, containerized = true }: MainProps) {
	return (
		<main
			className={cn(
				"flex-1",
				containerized && "container mx-auto px-4",
				className
			)}
		>
			{children}
		</main>
	);
}
