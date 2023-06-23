import { NextRequest } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/services/firebase";

export async function GET(request: NextRequest) {
	let data: {}[] = [];

	const { searchParams } = new URL(request.url);
	const language = searchParams.get("language");

	const dbRef = collection(db, "translations");
	const q = query(dbRef, where("language", "==", language));
	const docsSnap = await getDocs(q);

	docsSnap.forEach((doc) => {
		data.push({ ...doc.data() });
	});

	return new Response(JSON.stringify(data[0]));
}
