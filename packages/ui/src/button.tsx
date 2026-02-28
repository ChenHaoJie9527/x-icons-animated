import { cn } from "@x-icons/utils/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: Size;
	variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
	primary: "bg-blue-600 text-white hover:bg-blue-700 border-transparent",
	secondary: "bg-white text-gray-900 hover:bg-gray-50 border-gray-300",
	ghost: "bg-transparent text-gray-700 hover:bg-gray-100 border-transparent",
};

const sizeStyles: Record<Size, string> = {
	sm: "px-3 py-1.5 text-sm",
	md: "px-4 py-2 text-sm",
	lg: "px-5 py-2.5 text-base",
};

export function Button({
	variant = "primary",
	size = "md",
	className = "",
	children,
	disabled,
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(
				"inline-flex items-center justify-center gap-2 rounded-lg border font-medium",
				"cursor-pointer select-none transition-colors",
				"focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2",
				"disabled:cursor-not-allowed disabled:opacity-50",
				variantStyles[variant],
				sizeStyles[size],
				className
			)}
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
}
