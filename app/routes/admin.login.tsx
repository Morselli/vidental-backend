import { useLoaderData } from "react-router"


export async function loader() {
    return {}
}

export default function() {
    //const login = useLoaderData()

    return <h1>Login for Admin</h1>
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not found!</h3>