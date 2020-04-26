import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

import { NextSeo } from 'next-seo';

export default function Post({ postData }) {
  return (
    <Layout>
        <NextSeo
          title={postData.title}
          description={postData.description}
        />
        {/* title: {postData.title}
        <br />
        id: {postData.id}
        <br />
        date: {postData.date}
        <br /> */}
        <div className="post mb-5" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
