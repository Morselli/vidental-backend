import type { User } from "@prisma/client";
import { db } from "~/utils/db.server";

export async function getUsers(): Promise<User[]> {
  return await db.user.findMany()
}