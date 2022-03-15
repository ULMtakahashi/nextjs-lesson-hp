import Layout from '../components/Layout'
import Post from '../components/Post'
import { getAllPostsData } from '../lib/post'

export default function Blog({ posts })  {
  return (
    <Layout title="Blog">
      <ul className='m-10'>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

//api ビルド時」にデータを取得する
export async function getStaticProps(){
  const posts = await getAllPostsData();

  return {
    props: { posts },
  };
}