import type { ReactNode } from "react";

type GridCellProps = {
	title: string;
	testId: string;
	children?: ReactNode;
};

const GridCell = ({ title, testId, children }: GridCellProps) => {
	return (
		<section
			className="border border-zinc-400 p-1 text-zinc-100"
			data-testid={testId}
		>
			<h2 className="mb-2 text-sm font-medium tracking-wide text-zinc-300">
				{title}
			</h2>
			{children}
		</section>
	);
};

export const App = () => {
	return (
		<div className="min-h-screen w-full bg-black px-1 py-2">
			<div className="grid min-h-[calc(100vh-1rem)] grid-cols-3 grid-rows-3 border border-zinc-400">
				<GridCell title="Grid Cell 1" testId="grid-cell-1" />
				<GridCell title="Grid Cell 2" testId="grid-cell-2" />
				<GridCell title="Grid Cell 3" testId="grid-cell-3" />
				<GridCell title="Grid Cell 4" testId="grid-cell-4" />
				<GridCell title="Grid Cell 5" testId="grid-cell-5" />
				<GridCell title="Grid Cell 6" testId="grid-cell-6" />
				<GridCell title="Grid Cell 7" testId="grid-cell-7" />
				<GridCell title="Grid Cell 8" testId="grid-cell-8" />
				<GridCell title="Grid Cell 9" testId="grid-cell-9" />
			</div>
		</div>
	);
};
