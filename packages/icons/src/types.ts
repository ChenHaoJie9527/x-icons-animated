import type { SVGMotionProps } from "motion/react";
import type { ReactElement } from "react";

export type IconName = "file-text";

export interface IconProps extends SVGMotionProps<SVGSVGElement> {
	color?: string;
	size?: number;
}

export type IconComponent = (props: IconProps) => ReactElement;

export interface IconMeta {
	icon: React.ElementType;
	keywords: string[];
	name: IconName;
}
