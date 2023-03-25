import type { User } from "@prisma/client"
import { useLoaderData } from "react-router"
import { Users } from "~/features/User/components/Users"
import { getUsers } from "~/features/User/User.api"

export async function loader() {
  return await getUsers()
}

export default function() {
  const users = useLoaderData() as User[]

  return <Users users={users}/>
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not found!</h3>