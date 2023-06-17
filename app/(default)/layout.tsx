"use client";

import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		AOS.init({
			once: true,
			duration: 700,
			easing: "ease-out-cubic",
		});
	});
	return (
		<ThemeProvider attribute="class">
			<Header />
			{children}
		</ThemeProvider>
	);
}
