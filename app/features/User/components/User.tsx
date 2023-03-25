import type { User as UserType } from "@prisma/client";

export interface UserProps {
  user: UserType
}

export function User({user}: UserProps) {
  return <li>{user.name}</li>
}