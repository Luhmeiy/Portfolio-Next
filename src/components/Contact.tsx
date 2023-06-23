"use client";

import { FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ContactProps } from "@/interfaces/TranslationsData";

export default function Contact(contact: ContactProps) {
	function sendEmail(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const target = e.target as HTMLFormElement;

		emailjs.sendForm(
			"service_4aa788e",
			"template_7gtgs5n",
			target,
			"Ih8ISVmcCkc7Bg_-2"
		);

		target.reset();
	}

	return (
		<div
			className="flex min-h-screen w-full flex-col items-center justify-center py-10"
			id={contact.id}
		>
			<form
				className="relative flex w-full max-w-6xl flex-col items-center transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4"
				onSubmit={sendEmail}
			>
				<h1 className="mb-10 text-7xl font-bold">{contact.title}</h1>

				<div className="mb-4 flex w-full max-w-[700px] gap-4">
					<input
						type="text"
						name="name"
						placeholder={contact.name}
						className="w-full rounded-md border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
					/>
					<input
						type="email"
						name="email"
						placeholder={contact.email}
						className="w-full rounded-md border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
					/>
				</div>
				<textarea
					name="message"
					placeholder={contact.message}
					className="mb-8 h-60 w-full max-w-[700px] resize-none rounded-md border-2 border-black p-4 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white"
				></textarea>

				<button
					type="submit"
					className="rounded-lg bg-purple-600 px-8 py-4 font-bold tracking-wide text-white transition-colors duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white active:bg-purple-500"
				>
					{contact.button}
				</button>
			</form>
		</div>
	);
}
