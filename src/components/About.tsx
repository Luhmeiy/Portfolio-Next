export default function About() {
	return (
		<div
			className="flex min-h-screen w-full items-center justify-center py-10"
			id="about"
		>
			<div className="relative grid w-full max-w-6xl grid-cols-2 justify-items-center transition-all duration-[.75s] ease-in-out max-tablet:grid-cols-1 [@media(max-width:1152px)]:px-4">
				<h1
					data-text="About Me"
					className="mb-10 flex flex-col text-center text-7xl font-bold [-webkit-text-fill-color:transparent] [-webkit-text-stroke-color:gray] [-webkit-text-stroke:1px] before:content-[attr(data-text)] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-[attr(data-text)] after:[-webkit-text-stroke-color:lightgray]"
				>
					About Me
				</h1>

				<div className="w-full max-w-xl indent-10 text-xl text-gray-500">
					<p className="mb-5">
						I&apos;m a passionate full stack web developer based in
						Brazil, interested in bringing creative and unique
						projects to life with the skills I&apos;m quickly
						developing.
					</p>
					<p className="mb-5">
						Doesn&apos;t matter the difficulty:{" "}
						<span className="font-bold">I&apos;ll take it</span>. I
						love the thrill of the possibility of learning and
						improving my knowledge.
					</p>
					<p>
						I&apos;m also a writer and an avid enjoyer of 80s
						&quot;so bad, it&apos;s good&quot; fantasy/sci-fi
						movies.
					</p>
				</div>
			</div>
		</div>
	);
}
