import Link from 'next/link'
import { parse } from 'node-html-parser';

import Layout from './../components/Layout';

import { getAllPostIds, getPostData } from '../lib/posts'

const Post = ({params}) => {
  const contentHtml = () => {
    const root = parse(params.contentHtml);
    const original_title_str = root.querySelector('h1').toString();
    const title = root.querySelector('h1');
    title.set_content(`<a href="${process.env.ASSET_PREFIX+ `/posts/${params.id}`}" >${title.innerHTML}</a>`)
    // console.log('contentHtml',original_title_str, title.toString())
    return params.contentHtml.replace(original_title_str, title.toString());
  }
  return (
    <div className="mb-5">
      <div className="d-flex w-100 justify-content-end">
        <small className="text-secondary" >{params.date}</small>
      </div>
      <div className="post" dangerouslySetInnerHTML={{ __html: contentHtml() }} />
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

  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    posts[index].params.contentHtml =  (await getPostData(post.params.id)).contentHtml
  }

  return {
    props: {
      posts,
    }
  }
}


