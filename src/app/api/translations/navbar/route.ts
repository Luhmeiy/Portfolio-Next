import { NextRequest } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/services/firebase";

export async function GET(request: NextRequest) {
	let data: {}[] = [];

	const { searchParams } = new URL(request.url);
	const language = searchParams.get("language");

	const dbRef = collection(db, `translations/${language}/nav`);
	const docsSnap = await getDocs(dbRef);

	docsSnap.forEach((doc) => {
		data.push({ ...doc.data() });
	});

	return new Response(JSON.stringify(data));
}
