import { AppContext } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'

const PostDetail = ({ post }: any) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{router.query.postId}</title>
        {post?.title}
      </Head>
      PostDetail {router.query.postId}
    </>
  )
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context: AppContext) {
  console.log(context)
  return {
    props: {
      props: { post: {} },
    },
  }
}
export default PostDetail
