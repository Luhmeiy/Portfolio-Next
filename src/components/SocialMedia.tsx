import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function SocialMedia() {
	return (
		<div className="fixed bottom-5 left-6 z-10 flex flex-col max-tablet:hidden">
			<Link
				href="https://www.linkedin.com/in/luhmeiy/"
				className="group mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-gray-400 bg-white  transition-colors duration-500 hover:border-[#0077B5] focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
			>
				<Linkedin className="text-2xl text-gray-600 transition-colors duration-500 group-hover:text-[#0077B5]" />
			</Link>

			<Link
				href="https://github.com/Luhmeiy"
				className="group flex h-14 w-14 items-center justify-center rounded-full border border-gray-400 bg-white transition-colors duration-500 hover:border-black focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
			>
				<Github className="text-2xl text-gray-600 transition-colors duration-500 group-hover:text-black" />
			</Link>
		</div>
	);
}
