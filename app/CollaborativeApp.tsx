"use client";
import { useOthers } from "@/liveblocks.config";

export default function CollaborativeApp() {
	const others = useOthers();
	const useCount = others.length;
	return <h1>There are {useCount} other user(s) online</h1>;
}
