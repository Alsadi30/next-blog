import Header from '../../../components/Header'
import SectionHeader from '../../../components/SectionHeader'
import StraightCardSection from '../../../components/StraightCardSection'
import { useRouter } from 'next/router'

      

const { BLOG_URL, CONTENT_API_KEY } = process.env


const getPosts =async () => {
  
    const res = await fetch(
          `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
      ).then((res) => res.json())
  
      const posts = res.posts
       
      return posts
  
  }
  
  
  
  export const getStaticProps = async ({ params }) => {
      const posts = await getPosts()
      return {
          revalidate: 10,
          props: { posts }
      }
  }


export const getStaticPaths = () => {
	// paths -> slugs which are allowed
	// fallback ->
	return {
		paths: [],
		fallback: true
	}
}





export default function index({posts}) {

    const router = useRouter()


    const slug =router.query.slug

    return (
        <div>
            <Header />
            <SectionHeader slug={slug} />
            <StraightCardSection posts={posts} slug={slug}/>

        </div>
    )
}
