import { Layout } from "./layout";

export const App = () => {
	return (
		<Layout>
			<section className="flex flex-col gap-2">
				<h2 className="text-lg font-bold">基础示例</h2>
				<div className="flex w-full flex-wrap gap-4">
					<div className="size-50 rounded-2xl border-2 border-border hover-border-theme cursor-pointer flex items-center justify-center">
						up 方向淡入
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
