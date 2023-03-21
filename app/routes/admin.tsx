import { LoaderFunction, useLoaderData } from "react-router"

export const loader: LoaderFunction = async ({ params }) => {
  return {}
}


export default function () {
  // const {} = useLoaderData()
  
  return <div>Content here.</div>
}

export const ErrorBoundary = () => <h3>Whoops!</h3>

export const CatchBoundary = () => <h3>Not found!</h3>

//export const action: ActionFunction = async ({ params }) => {
//  return{}
//}