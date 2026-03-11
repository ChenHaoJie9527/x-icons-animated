"use client";

import { useState } from "react";
import { IconList } from "@/components/icon-list";
import { StoryTimeline } from "@/components/story-timeline";
import type { IconFilterSource, IconMeta } from "@/lib/icon-types";
import { Tabs } from "./tabs";

type Icon = Pick<IconMeta, "name" | "keywords" | "source">;

interface IconsBrowserProps {
	icons: Icon[];
}

export function IconsBrowser({ icons }: IconsBrowserProps) {
	const [activeSource, setActiveSource] = useState<IconFilterSource>("all");
	const [searchValue, setSearchValue] = useState("");

	return (
		<>
			<StoryTimeline
				onSearchChange={setSearchValue}
				searchValue={searchValue}
			/>
			<Tabs
				icons={icons}
				onValueChange={setActiveSource}
				value={activeSource}
			/>
			<IconList
				activeSource={activeSource}
				icons={icons}
				searchValue={searchValue}
			/>
		</>
	);
}
