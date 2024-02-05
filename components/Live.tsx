import { useMyPresence, useOthers } from "@/liveblocks.config";
import LiveCursors from "./cursor/LiveCursors";
import { useCallback } from "react";

const Live = () => {
	const others = useOthers();
	const [{ cursor }, updateMyPresence] = useMyPresence() as any;

	const handlePointerMove = useCallback((event: React.PointerEvent) => {
		event.preventDefault();

		const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
		const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
		updateMyPresence({ cursor: { x, y } });
	}, []);

	const handlePointerDown = useCallback((event: React.PointerEvent) => {
		const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
		const y = event.clientY - event.currentTarget.getBoundingClientRect().y;
		updateMyPresence({ cursor: { x, y } });
	}, []);

	const handlePointerLeave = useCallback((event: React.PointerEvent) => {
		event.preventDefault();
		updateMyPresence({ cursor: null, message: null });
	}, []);

	return (
		<div
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerLeave={handlePointerLeave}
			className="border-2 border-green-500 h-[100vh] w-full flex justify-center item-center text-center"
		>
			<h1 className="text-5xl text-white">Liveblocks Figma Clone</h1>
			<LiveCursors others={others} />
		</div>
	);
};

export default Live;
