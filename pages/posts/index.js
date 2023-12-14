import Link from 'next/link';

function PostsList({ posts }) {
    return (
        <>
            <h1>List Of Posts</h1>
            {posts?.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h4>{post.id} - {post.title}</h4>
                        </Link>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default PostsList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();
    return {
        props: {
            posts: posts
        }
    }
}