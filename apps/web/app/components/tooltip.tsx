"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import { cn } from "@x-icons/utils/cn";

interface TooltipProps {
	content: React.ReactNode;
	children: React.ReactNode;
	side?: "top" | "right" | "bottom" | "left";
	sideOffset?: number;
	delayDuration?: number;
}

export function Tooltip({
	content,
	children,
	side = "bottom",
	sideOffset = 8,
	delayDuration = 200,
}: TooltipProps) {
	return (
		<BaseTooltip.Provider delay={delayDuration}>
			<BaseTooltip.Root>
				<BaseTooltip.Trigger>{children}</BaseTooltip.Trigger>
				<BaseTooltip.Portal>
					<BaseTooltip.Positioner side={side} sideOffset={sideOffset}>
						<BaseTooltip.Popup
							className={cn(
								"z-50 px-3 py-1.5 text-xs rounded",
								" bg-surface text-foreground",
								"border border-border",
								"shadow-lg",
								"animate-in fade-in-0 zoom-in-95 duration-200"
							)}
						>
							<BaseTooltip.Arrow
								className={cn(
									"fill-surface",
									"[&>path:first-child]:stroke-border"
								)}
							/>
							{content}
						</BaseTooltip.Popup>
					</BaseTooltip.Positioner>
				</BaseTooltip.Portal>
			</BaseTooltip.Root>
		</BaseTooltip.Provider>
	);
}
