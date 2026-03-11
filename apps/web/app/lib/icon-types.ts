export type IconSource = "heroicons" | "lucide" | "phosphor" | "hugeicons";
export type IconFilterSource = "all" | IconSource;

export interface IconMeta {
	icon: React.ElementType;
	keywords: string[];
	name: string;
	source: IconSource; // 图标来源库
	tags?: string[]; // 图表标签
	aliases?: string[]; // 图表别名
}

export interface IconAnimationHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}
