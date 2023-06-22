"use client";

import { useState } from "react";
import {
	Home,
	Monitor,
	PanelTopClose,
	Scroll,
	Send,
	User,
	Users,
	X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import * as Popover from "@radix-ui/react-popover";

const icons = [
	<Home size={24} key="Home" />,
	<User size={24} key="User" />,
	<Scroll size={24} key="Scroll" />,
	<Monitor size={24} key="Monitor" />,
	<Send size={24} key="Send" />,
];

const navItems = ["home", "about", "skills", "work", "contact"];

export default function Navbar() {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="bg-[rgba(255, 255, 255, .25)] border-b-[rgba(255, 255, 255, .18)] fixed z-10 flex w-full justify-center border-b px-4 py-8 backdrop-blur-sm backdrop-filter max-tablet:bottom-0 max-tablet:rounded-xl max-tablet:bg-white max-tablet:px-6 max-tablet:py-3 max-tablet:shadow-[0_0_20px_rgba(168,168,168,.25)]">
			<div className="flex w-full max-w-6xl items-center justify-between">
				<div className="text-3xl font-bold text-purple-600 max-tablet:text-2xl">
					Medeiros
				</div>

				<ul className="flex items-center justify-center max-tablet:hidden">
					{navItems.map((item) => (
						<li
							key={`link-${item}`}
							className="mx-4 flex cursor-pointer justify-center"
						>
							<a
								href={`#${item}`}
								className="rounded-sm font-bold uppercase text-gray-600 duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
								aria-label={`Scroll to ${item}`}
							>
								{item}
							</a>
						</li>
					))}
				</ul>

				<div className="relative flex items-center justify-center rounded-full tablet:hidden">
					<PanelTopClose onClick={() => setToggle(true)} size={26} />

					<AnimatePresence>
						{toggle && (
							<motion.div
								initial={{ bottom: -200 }}
								animate={{ bottom: 0 }}
								exit={{ bottom: -200 }}
								transition={{
									duration: 0.5,
									ease: "easeInOut",
								}}
								className="inset-b-0 fixed inset-x-0 z-20 flex w-full flex-col items-end rounded-3xl bg-white px-6 py-4 shadow-[0_0_20px_rgba(168,168,168,.25)]"
							>
								<ul className="grid h-full w-full grid-cols-3">
									{navItems.map((item, i) => (
										<li
											key={item}
											className="group m-4 flex cursor-pointer flex-col items-center"
										>
											<a
												href={`#${item}`}
												className="flex flex-col items-center text-sm font-bold uppercase text-gray-500 duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
											>
												{icons[i]}
												<span className="mt-1">
													{item}
												</span>
											</a>
										</li>
									))}

									<li className="group relative m-4 flex cursor-pointer flex-col items-center">
										<Popover.Root>
											<Popover.Trigger asChild>
												<button className="flex flex-col items-center text-sm font-bold uppercase text-gray-500 duration-[.3s] ease-in-out hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white">
													<Users size={24} />
													<span className="mt-1">
														Social media
													</span>
												</button>
											</Popover.Trigger>

											<Popover.Portal>
												<Popover.Content className="z-20 mr-4 flex rounded-lg bg-zinc-700 px-8 py-2 text-sm font-bold uppercase text-white tablet:hidden">
													<a
														href="https://www.linkedin.com/in/luhmeiy/"
														target="_blank"
														className="mr-8 flex flex-col items-center"
													>
														<i className="devicon-linkedin-plain text-2xl" />
														<span className="mt-1">
															Linkedin
														</span>
													</a>

													<a
														href="https://github.com/Luhmeiy"
														target="_blank"
														className="flex flex-col items-center"
													>
														<i className="devicon-github-original text-2xl" />
														<span className="mt-1">
															GitHub
														</span>
													</a>
													<Popover.Arrow />
												</Popover.Content>
											</Popover.Portal>
										</Popover.Root>
									</li>
								</ul>
								<X
									onClick={() => {
										setToggle(false);
									}}
									size={24}
									className="text-red-400"
								/>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</nav>
	);
}
