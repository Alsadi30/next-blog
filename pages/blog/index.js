import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import FlatCardSection from '../../components/FlatCardSection'
import StraightCardSection from '../../components/StraightCardSection'
import Footer from '../../components/Footer'



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





export default function Blog({posts}) {
    return (
        <div className='blog-container'> 
            <Header />
            <SectionHeader slug={'Energy & Environment'}/>
            <FlatCardSection  posts={posts} slug={'Energy & Environment'}/>
            <SectionHeader slug={'Physics & Mathematics'} />
            <StraightCardSection posts={posts} slug={'Physics & Mathematics'} />
            <SectionHeader slug={'Technology'} />
            <FlatCardSection posts={posts} slug={'Technology'} />
            <SectionHeader slug={'Space'} />
            <StraightCardSection posts={posts} slug={'Space'} />
            <Footer />
        </div>
    )
}
