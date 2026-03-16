export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<section className="grid w-full  grid-rows-[auto_1fr_auto] gap-2 min-h-screen p-2 space-y-4">
			<header className="text-2xl font-bold text-left leading-10 border-b border-zinc-400 pb-2">
				<h1 className="text-2xl font-bold text-left leading-10">
					Timeline-Kit Playground
				</h1>
			</header>
			<main className="space-y-5">{children}</main>
		</section>
	);
};
