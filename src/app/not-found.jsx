import Link from "next/link"

const NotFound = () => {
  return (
    <div><h2>Not Found</h2>
    <p>Sorry! Page cannot be found.</p>
    <Link href='/'>Go Home</Link></div>
  )
}

export default NotFound