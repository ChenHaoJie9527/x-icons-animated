export interface IconMeta {
	icon: React.ElementType;
	keywords: string[];
	name: string;
}

export interface IconAnimationHandle {
	startAnimation: () => void;
	stopAnimation: () => void;
}
