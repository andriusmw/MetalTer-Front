import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return <section>
        <h1>PAGE NOT FOUND</h1>
        <Link to={'/'}>Back to Home Page</Link>
    </section>
}