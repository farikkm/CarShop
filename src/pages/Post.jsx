import { useLocation, Link } from "react-router-dom";

export default function Post() {
    const location = useLocation()
    const post = location.post?.state

    if (!post) {
        return <h2>Page not found!</h2>
    }

    return (
        <>
            <div className="post">
                <h3 className="post__title">{post.title}</h3>
                <h5 className="post__subtitle">{post.subtitle}</h5>
                <p className="post__text">{post.text}</p>
            </div>

            <Link to="/">Back To Home</Link>
        </>
    )
}