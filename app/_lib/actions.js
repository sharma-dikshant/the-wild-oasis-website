"use server";

import { auth, signIn, signOut } from "./auth";
import { updateGuest } from "./data-service";

export async function updateProfile(formData) {
  // console.log(formData);
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Invalid national ID number");

  const updateData = { nationality, countryFlag, nationalID };
  // console.log(updateData);
  const data = await updateGuest(session.user.guestId, updateData);
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
