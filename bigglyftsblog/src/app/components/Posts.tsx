import { getSortedPostsData } from "../../../lib/post"
import ListPosts from "./ListPosts"

export default async function Posts() {
    const posts = await getSortedPostsData()

    if (!posts) {
        return <p className="mt-10 darl:text-white text-center">Sorry, no posts available.</p>
    }

    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            <ul className="w-full list-none p-0">
                {posts.map(post => (
                    <ListPosts key={post.id} post={post} />
                ))}
            </ul>
        </section>
    )
}