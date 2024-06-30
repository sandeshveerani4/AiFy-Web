import admin from "firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import crpyto from "crypto";
import { send365Email } from "@/utils/mailer";
if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "textaify-5d7b6",
      privateKey: process.env["FIREBASE_PRIVATE_KEY"],
      clientEmail: process.env["FIREBASE_CLIENT_EMAIL"],
    }),
  });

export async function DELETE(req: NextRequest) {
  const { email } = await req.json();
  const user = await admin.auth().getUserByEmail(email);
  await admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .update({ deleteId: crpyto.randomUUID() + user.uid });
  await send365Email(
    "info@textaify.com",
    email,
    "Delete your account",
    "hello",
    "hello"
  );
  return NextResponse.json({ ok: true });
}
