import Link from "next/link";
import React from "react";

function Hero() {
	return (
		<section className="relative bg-[url(/justice.jpg)] bg-cover bg-top bg-no-repeat">
			<div
				className="absolute inset-0 bg-white/50 sm:from-white/95
       dark:bg-black/50  dark:sm:from-black/75  sm:bg-gradient-to-r"></div>

			<div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 text-neutral-900 dark:text-neutral-100">
				<div className="max-w-xl text-center sm:text-start">
					<h1 className="text-3xl font-extrabold sm:text-5xl">
						Soluciones para tus
						<strong className="block font-extrabold">Problemas legales.</strong>
					</h1>

					<p className="mt-4 max-w-lg sm:text-xl/relaxed text-neutral-600 dark:text-neutral-300">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="mt-8 flex flex-wrap text-center">
						<Link
							href="/contact"
							className="block w-full rounded border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 px-5 py-2 text-sm font-medium text-neutral-200 dark:text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-100 focus:outline-none focus:ring active:text-neutral-50 transition duration-300 sm:w-auto">
							Contacto
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;