import Link from 'next/link'

import Layout from './../components/Layout';

import { getAllPostIds, getPostData } from '../lib/posts'

const Post = (post) => {
  return (
    <li>
      <Link href={`/posts/${post.params.id}`} as={process.env.ASSET_PREFIX+ `/posts/${post.params.id}`} >
        <a className="nav-link">
          {post.params.id}: {post.params.title}
        </a>
      </Link>
    </li>
  )
}

Post.getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default function Home({ posts }) {
  return (
    <Layout>
      <ul>
        {
          posts.map(post => Post(post))
        }
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getAllPostIds();
  console.log('getStaticProps', {posts})
  return {
    props: {
      posts,
    }
  }
}


