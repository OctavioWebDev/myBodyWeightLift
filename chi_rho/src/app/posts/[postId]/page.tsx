import getFormattedDate from "../../../../lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "../../../../lib/post";
import { notFound } from "next/navigation";
import Link from "next/link";
// import Comment from "../../components/CommentSection";
export function generateStaticParams() {
    const posts = getSortedPostsData()

    return posts.map((post) => ({
        postId: post.id
    }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) notFound()

    const postData = await getPostData(postId)
    if (!postData) {

        notFound();
    }

    const { title, date, contentHtml } = postData

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-7 prose prose-xl prose-invert mx-auto">
            <h1 className="text-3xl mt-5 mb-0">{title}</h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/blog">← Back to index</Link>
                </p>
            </article>
            {/* <Comment /> */}
        </main>
    )
}
