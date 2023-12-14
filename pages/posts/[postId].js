// import { useRouter } from 'next/router';

function Post({ post }) {
  // const router = useRouter();

  // if (router.isFallback) {
  //   <h2>Loading...</h2>
  // }
  return (
    <>
      <h2>{post?.id} {post?.title}</h2>
      <p>{post?.body}</p>
    </>
  )
}

export default Post;

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`
      }
    }
  })
  return {
    // paths: paths,
    paths: [
      {
        params: { postId: '1' }
      },
      {
        params: { postId: '2' }
      },
      {
        params: { postId: '3' }
      }
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await response.json();
  if (!post.id) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      post: post
    }
  }
}