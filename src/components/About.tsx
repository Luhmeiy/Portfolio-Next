import { AboutProps } from "@/interfaces/TranslationsData";

export default function About(about: AboutProps) {
	const text = about.text.split("/break/");

	return (
		<div
			className="flex min-h-screen w-full items-center justify-center py-10"
			id={about.id}
		>
			<div className="relative grid w-full max-w-6xl grid-cols-2 justify-items-center transition-all duration-[.75s] ease-in-out max-tablet:grid-cols-1 [@media(max-width:1152px)]:px-4">
				<h1
					data-text={about.title}
					className="mb-10 flex flex-col text-center text-7xl font-bold [-webkit-text-fill-color:transparent] [-webkit-text-stroke-color:gray] [-webkit-text-stroke:1px] before:content-[attr(data-text)] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-[attr(data-text)] after:[-webkit-text-stroke-color:lightgray]"
				>
					{about.title}
				</h1>

				<div className="w-full max-w-xl indent-10 text-xl text-gray-500">
					{text.map((paragraph, i) => (
						<p
							key={i}
							className="mb-5"
							dangerouslySetInnerHTML={{ __html: paragraph }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
