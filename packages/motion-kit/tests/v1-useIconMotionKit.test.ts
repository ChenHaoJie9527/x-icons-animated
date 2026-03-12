import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { type IconMotionHandle, useIconMotionKit } from "../src/use-icon-motion-kit";
import { createRef, type MouseEvent } from "react";

const startMock = vi.fn();

vi.mock("motion/react", () => {
	return {
		useAnimation: () => ({
			start: startMock,
		}),
	};
});

const createMouseEvent = (): MouseEvent<HTMLDivElement> => {
	return {} as MouseEvent<HTMLDivElement>;
};

describe("useIconMotionKit", () => {
	// 每次测试前重置模拟函数
	beforeEach(() => {
		startMock.mockReset();
	});

	it("start() 方法应该触发动画状态", () => {
		// 渲染 Hook 并获取控制函数
		const { result } = renderHook(() => useIconMotionKit({}));

		// 触发 start 方法
		act(() => {
			result.current.start();
		});

		// 检查 startMock 是否被调用， 并且传入的参数是 "animate"
		expect(startMock).toHaveBeenCalledWith("animate");
	});

	it("stop() 方法应该停止动画状态", () => {
		// 渲染 Hook 并获取控制函数
		const { result } = renderHook(() => useIconMotionKit({}));
		// 触发 stop 方法
		act(() => {
			result.current.stop();
		});
		// 检查 startMock 是否被调用， 并且传入的参数是 "normal"
		expect(startMock).toHaveBeenCalledWith("normal");
	});

	it("悬停处理程序应在 playOnHover=true 时自动播放", () => {
		const onMouseEnter = vi.fn();
		const onMouseLeave = vi.fn();

		const { result } = renderHook(() =>
			useIconMotionKit({
				onMouseEnter,
				onMouseLeave,
				playOnHover: true,
			})
		);

		const enterEvent = createMouseEvent();
		const leaveEvent = createMouseEvent();

		// 触发悬停事件
		act(() => {
			result.current.handleMouseEnter(enterEvent);
			result.current.handleMouseLeave(leaveEvent);
		});

		expect(onMouseEnter).toHaveBeenCalledWith(enterEvent);
		expect(onMouseLeave).toHaveBeenCalledWith(leaveEvent);
		expect(startMock).toHaveBeenNthCalledWith(1, "animate");
		expect(startMock).toHaveBeenNthCalledWith(2, "normal");
	});

	it("悬停处理程序在 playOnHover=false 时不应自动播放", () => {
		const onMouseEnter = vi.fn();
		const onMouseLeave = vi.fn();
		const { result } = renderHook(() =>
			useIconMotionKit({
				onMouseEnter,
				onMouseLeave,
				playOnHover: false,
			})
		);
		const enterEvent = createMouseEvent();
		const leaveEvent = createMouseEvent();
		// 触发悬停事件
		act(() => {
			result.current.handleMouseEnter(enterEvent);
			result.current.handleMouseLeave(leaveEvent);
		});
		expect(onMouseEnter).toHaveBeenCalledWith(enterEvent);
		expect(onMouseLeave).toHaveBeenCalledWith(leaveEvent);
		expect(startMock).not.toHaveBeenCalled();
	});

	it("应该暴露受控模式的 imperative ref 方法", () => {
		const onMouseEnter = vi.fn();
		const onMouseLeave = vi.fn();
		const ref = createRef<IconMotionHandle>();
		const { result } = renderHook(() =>
			useIconMotionKit({
				ref,
				onMouseEnter,
				onMouseLeave,
				playOnHover: true,
			})
		);
		// 检查 ref 是否被创建
		expect(ref.current).toBeTruthy();
		expect(ref.current?.startAnimation).toBeTypeOf("function");
		expect(ref.current?.stopAnimation).toBeTypeOf("function");
		// 触发 start 和 stop 方法
		act(() => {
			ref.current?.startAnimation();
			ref.current?.stopAnimation();
		});
		// 检查 startMock 是否被调用， 并且传入的参数是 "animate" 和 "normal"
		expect(startMock).toHaveBeenNthCalledWith(1, "animate");
		expect(startMock).toHaveBeenNthCalledWith(2, "normal");
		// 清除 startMock 的调用记录
		startMock.mockClear();
		// 受控模式下：hover 只透传回调，不自动 start/stop
		const enterEvent = createMouseEvent();
		const leaveEvent = createMouseEvent();
		act(() => {
			result.current.handleMouseEnter(enterEvent);
			result.current.handleMouseLeave(leaveEvent);
		});
		// 检查 onMouseEnter 和 onMouseLeave 是否被调用
		expect(onMouseEnter).toHaveBeenCalledWith(enterEvent);
		expect(onMouseLeave).toHaveBeenCalledWith(leaveEvent);
		expect(startMock).not.toHaveBeenCalled();
	});
});
