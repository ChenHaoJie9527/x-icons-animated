import { render, renderHook } from "@testing-library/react";
import type { PropsWithChildren } from "react";
import { describe, expect, it } from "vitest";
import { useAnimationTimeline } from "@/hooks";
import { Timeline } from "@/timeline";
import { AnimationTimelineProvider } from "@/timeline-provider";
import { TimelineRoot } from "@/timeline-root";
import { buildTimelineVariant } from "@/utils";

describe("timeline-kit", () => {
	it("buildTimelineVariant 应正确计算 delay 与位移", () => {
		const variant = buildTimelineVariant(
			{
				baseTime: 0.2,
				duration: 0.4,
				ease: "easeInOut",
				distance: 24,
				stagger: 0.15,
			},
			{
				at: 0.1,
				direction: "left",
			},
			2
		);

		expect(variant.initial).toEqual({ opacity: 0, x: -24 });
		expect(variant.animate).toEqual({ opacity: 1, x: 0 });
		expect(variant.transition.delay).toBeCloseTo(0.6, 5);
		expect(variant.transition.duration).toBe(0.4);
	});

	it("useAnimationTimeline 应支持 Provider 默认值与局部覆盖", () => {
		const wrapper = ({ children }: PropsWithChildren) => (
			<AnimationTimelineProvider value={{ duration: 0.5, stagger: 0.2 }}>
				{children}
			</AnimationTimelineProvider>
		);

		const { result } = renderHook(
			() => useAnimationTimeline({ baseTime: 0.3 }),
			{ wrapper }
		);

		expect(result.current.duration).toBe(0.5);
		expect(result.current.stagger).toBe(0.2);
		expect(result.current.baseTime).toBe(0.3);
		expect(result.current.ease).toBe("easeInOut");
	});

	it("Timeline 不在 TimelineRoot 内使用时抛错", () => {
		expect(() =>
			render(
				<AnimationTimelineProvider>
					<Timeline>item</Timeline>
				</AnimationTimelineProvider>
			)
		).toThrowError("Timeline must be used within TimelineRoot");
	});

	it("Timeline 在 Root 内可正常渲染", () => {
		const { getByText } = render(
			<AnimationTimelineProvider>
				<TimelineRoot>
					<Timeline>hero title</Timeline>
				</TimelineRoot>
			</AnimationTimelineProvider>
		);

		expect(getByText("hero title")).toBeTruthy();
	});
});
