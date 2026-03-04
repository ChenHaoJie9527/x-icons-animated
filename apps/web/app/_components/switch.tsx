"use client";

import { Switch as BaseSwitch } from "@base-ui/react/switch";
import { cn } from "@x-icons/utils/cn";

interface SwitchProps {
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
	label?: string;
	disabled?: boolean;
	className?: string;
}

export function Switch({
	checked,
	onCheckedChange,
	label,
	disabled,
	className,
}: SwitchProps) {
	return (
		<div className={cn("inline-flex items-center gap-2", className)}>
			<BaseSwitch.Root
				checked={checked}
				className={cn(
					"group relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors",
					"focus-visible:outline-2 focus-visible:outline-[var(--primary)] focus-visible:outline-offset-2",
					"disabled:cursor-not-allowed disabled:opacity-50",
					checked ? "bg-[var(--primary)]" : "bg-[var(--surface)]"
				)}
				disabled={disabled}
				onCheckedChange={(isChecked) => {
					onCheckedChange(isChecked);
				}}
			>
				<BaseSwitch.Thumb
					className={cn(
						"pointer-events-none block size-4 rounded-full bg-white shadow-sm transition-transform",
						"group-hover:shadow-md",
						checked ? "translate-x-[18px]" : "translate-x-0.5"
					)}
				/>
			</BaseSwitch.Root>
			{label && (
				<span className="text-sm text-[var(--foreground)] select-none">
					{label}
				</span>
			)}
		</div>
	);
}
