import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
        
        {/* title: {postData.title}
        <br />
        id: {postData.id}
        <br />
        date: {postData.date}
        <br /> */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <style jsx >{`
          pre {
            background-color: darkgray;
            padding: 1em;
            color: white;
          }
        `}</style>
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
