"use client";

import { getIcons } from "@x-icons/icons/actions/get-icons";
import { IconList } from "@x-icons/ui/icon-list";
import { useState } from "react";
import { AppFooter } from "./_components/footer";
import { AppHeader } from "./_components/header";
import { AppSidebar } from "./_components/sidebar";

const icons = getIcons();

export default function Home() {
	const [search, setSearch] = useState("");

	return (
		<div className="flex flex-col h-full bg-[var(--background)] text-[var(--foreground)]">
			<AppHeader
				onSearchChange={setSearch}
				searchValue={search}
				totalIcons={icons.length}
			/>
			<div className="flex flex-1 overflow-hidden min-h-0">
				<AppSidebar searchValue={search} totalIcons={icons.length} />
				<main className="flex-1 overflow-y-auto">
					<IconList icons={icons} searchValue={search} />
				</main>
			</div>
			<AppFooter />
		</div>
	);
}
