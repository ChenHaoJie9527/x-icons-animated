export type IconSource = "heroicons" | "lucide" | "phosphor" | "hugeicons";

export interface IconMeta {
	icon: React.ElementType;
	keywords: string[];
	name: string;
	source?: IconSource; // 图表来源库
	tags?: string[]; // 图表标签
	aliases?: string[]; // 图表别名
}

export interface IconAnimationHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}
