"use client";
import { Layout } from "./layout";
import { TimelineUp, type TimelineUpHandle } from "./timeline-up";
import { useRef } from "react";

export const App = () => {
	const timelineUpRef = useRef<TimelineUpHandle>(null);

	return (
		<Layout>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">基础示例</h2>
				<div className="flex w-full flex-wrap gap-4">
					<div
						onMouseEnter={() => timelineUpRef.current?.startAnimation()}
						onMouseLeave={() => timelineUpRef.current?.stopAnimation()}
					>
						<TimelineUp ref={timelineUpRef} />
					</div>
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						down 方向淡入
					</div>
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						left 方向淡入
					</div>
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						right 方向淡入
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">组合示例</h2>
			</section>
		</Layout>
	);
};
