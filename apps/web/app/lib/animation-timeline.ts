/**
 * 动画时间轴管理系统
 * 统一管理页面所有入场动画的时序和配置
 */

type AnimationEase = "easeIn" | "easeOut" | "easeInOut" | "linear";

export interface AnimationConfig {
	/** 动画起始时间（秒） */
	startTime: number;
	/** 动画持续时长（秒） */
	duration: number;
	/** X轴位移量（px） */
	x?: number;
	/** Y轴位移量（px） */
	y?: number;
	/** 缓动函数 */
	ease?: AnimationEase;
}

export interface AnimationVariant {
	initial: {
		opacity: number;
		x?: number;
		y?: number;
	};
	animate: {
		opacity: number;
		x?: number;
		y?: number;
	};
	transition: {
		duration: number;
		delay: number;
		ease?: AnimationEase;
	};
}

/**
 * 动画时间轴配置接口
 * @param baseTime - 动画起始时间（秒）
 * @param defaultDuration - 动画持续时长（秒）
 * @param defaultEase - 缓动函数
 */
export interface AnimationTimelineConfig {
	baseTime?: number;
	defaultDuration?: number;
	defaultEase?: AnimationEase;
}

/**
 * 动画时间轴配置
 */
export class AnimationTimeline {
	private readonly baseTime: number;
	private readonly defaultDuration: number;
	private readonly defaultEase: AnimationEase;

	constructor(config: AnimationTimelineConfig) {
		this.baseTime = config.baseTime ?? 0;
		this.defaultDuration = config.defaultDuration ?? 0.6;
		this.defaultEase = config.defaultEase ?? "easeInOut";
	}

	/**
	 * 创建淡入动画配置
	 * @param config - 动画配置
	 * @param config.startTime - 动画起始时间（秒）
	 * @param config.duration - 动画持续时长（秒）
	 * @param config.x - X轴位移量（px）
	 * @param config.y - Y轴位移量（px）
	 * @param config.ease - 缓动函数
	 * @returns 动画配置
	 */
	create(config: AnimationConfig): AnimationVariant {
		const {
			startTime,
			duration = this.defaultDuration,
			x = 0,
			y = 0,
			ease = this.defaultEase,
		} = config;

		return {
			initial: {
				opacity: 0,
				...(x !== 0 && { x }),
				...(y !== 0 && { y }),
			},
			animate: {
				opacity: 1,
				...(x !== 0 && { x: 0 }),
				...(y !== 0 && { y: 0 }),
			},
			transition: {
				duration,
				delay: this.baseTime + startTime,
				ease,
			},
		};
	}

	/**
	 * 创建从左淡入（向右移动）
	 * @param startTime - 动画起始时间（秒）
	 * @param duration - 动画持续时长（秒）
	 * @param fadeDistance - 淡入距离（px）
	 * @param ease - "easeIn" | "easeOut" | "easeInOut" | "linear"
	 */
	fadeInLeft(
		startTime: number,
		duration?: number,
		fadeDistance?: number,
		ease?: AnimationEase
	): AnimationVariant {
		return this.create({
			startTime,
			duration: duration ?? this.defaultDuration,
			x: fadeDistance ?? -20,
			ease: ease ?? this.defaultEase,
		});
	}

	/**
	 * 创建从右淡入（向左移动）
	 * @param startTime - 动画起始时间（秒）
	 * @param duration - 动画持续时长（秒）
	 * @param fadeDistance - 淡入距离（px）
	 * @param ease - "easeIn" | "easeOut" | "easeInOut" | "linear"
	 */
	fadeInRight(
		startTime: number,
		duration?: number,
		fadeDistance?: number,
		ease?: AnimationEase
	): AnimationVariant {
		return this.create({
			startTime,
			duration: duration ?? this.defaultDuration,
			x: fadeDistance ?? 20,
			ease: ease ?? this.defaultEase,
		});
	}

	/**
	 * 创建从下淡入（向上移动）
	 * @param startTime - 动画起始时间（秒）
	 * @param duration - 动画持续时长（秒）
	 * @param fadeDistance - 淡入距离（px）
	 * @param ease - "easeIn" | "easeOut" | "easeInOut" | "linear"
	 */
	fadeInUp(
		startTime: number,
		duration?: number,
		fadeDistance?: number,
		ease?: AnimationEase
	): AnimationVariant {
		return this.create({
			startTime,
			duration: duration ?? this.defaultDuration,
			y: fadeDistance ?? 20,
			ease: ease ?? this.defaultEase,
		});
	}

	/**
	 * 创建从上淡入（向下移动）
	 * @param startTime - 动画起始时间（秒）
	 * @param duration - 动画持续时长（秒）
	 * @param fadeDistance - 淡入距离（px）
	 * @param ease - "easeIn" | "easeOut" | "easeInOut" | "linear"
	 */
	fadeInDown(
		startTime: number,
		duration?: number,
		fadeDistance?: number,
		ease?: AnimationEase
	): AnimationVariant {
		return this.create({
			startTime,
			duration: duration ?? this.defaultDuration,
			y: fadeDistance ?? -20,
			ease: ease ?? this.defaultEase,
		});
	}

	/**
	 * 创建纯淡入（无位移）
	 * @param startTime - 动画起始时间（秒）
	 * @param duration - 动画持续时长（秒）
	 */
	fadeIn(startTime: number, duration?: number): AnimationVariant {
		return this.create({
			startTime,
			duration: duration ?? this.defaultDuration,
		});
	}
}

/**
 * 页面入场动画时间轴配置
 */
export const pageTimeline = new AnimationTimeline({
	baseTime: 0,
	defaultDuration: 0.6,
	defaultEase: "easeInOut",
});

/**
 * 预设的页面动画配置
 */
export const PAGE_ANIMATIONS = {
	// Header
	headerLeft: pageTimeline.fadeInLeft(0, 0.5, -40),
	headerRight: pageTimeline.fadeInRight(0, 0.5, 40),

	// Story Timeline
	heroTitle: pageTimeline.fadeInUp(0.3),
	heroStats: pageTimeline.fadeInUp(0.45),
	heroDescription: pageTimeline.fadeInUp(0.6),
	heroSearch: pageTimeline.fadeInUp(0.75),
	heroFooter: pageTimeline.fadeInUp(0.9),
	tabs: pageTimeline.fadeInUp(1.05),
	heroIconsContent: pageTimeline.fadeInUp(1.2),
};
