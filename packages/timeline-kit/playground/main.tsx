import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AnimationTimelineProvider } from "@/timeline";
import { App } from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
	throw new Error("Missing #root element");
}

createRoot(rootElement).render(
	<StrictMode>
		<AnimationTimelineProvider value={{ duration: 0.4, stagger: 0.12 }}>
			<App />
		</AnimationTimelineProvider>
	</StrictMode>
);
