import Link from 'next/link'

import Layout from './../components/Layout';

var _ = require('lodash');

import { getAllPostIds, getPostData } from '../lib/posts'

const Post = (post) => {
  return (
    <div className="mb-4">
      <h4 className="mb-0">
        <Link href={`/posts/${post.params.slug}`} as={process.env.ASSET_PREFIX+ `/posts/${post.params.id}`} >
          {post.params.title}
        </Link>
      </h4>
      <small>{post.params.date}</small>
      <p>
        {post.params.description}
      </p>
      <hr />
    </div>
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
      <div>
        { posts.map(post => Post(post)) }
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  let posts = getAllPostIds();
  posts = posts.sort((a, b) => {
    var dateA = new Date(a.params.date);
    var dateB = new Date(b.params.date);
    return  dateB - dateA;
  })

  return {
    props: {
      posts,
    }
  }
}


