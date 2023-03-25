import type { User as UserType } from "@prisma/client";
import { User } from "./User";

export interface UserProps {
  users: UserType[]
}

export function Users({ users }: UserProps) {
  return (
    <>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => {
          return <User key={user.id} user={user}/>
        })}
      </ul>
    </>
  )
}