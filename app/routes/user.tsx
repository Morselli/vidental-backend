import type { User } from "@prisma/client"
import { useLoaderData } from "react-router"
import { getUsers } from "~/features/User/User.api"

export async function loader() {
  return await getUsers()
}

export default function Users() {
  const users = useLoaderData() as User[]

  return (
    <>
      <h1>Usuários</h1>
      {users.map((user) => {
        return <p key={user.id}><b>{user.name}</b></p>
      })}
    </>
  )
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not found!</h3>

//export const action: ActionFunction = async ({ params }) => {
//  return{}
//}