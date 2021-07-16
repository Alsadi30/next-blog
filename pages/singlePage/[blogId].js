import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SinglePageTitle from '../../components/SinglePageTitle'
import PostBody from '../../components/SinglePageBody'
import RelatedPost from '../../components/SinglePageSide'



const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost() {
	const res = await fetch(
		`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
	).then((res) => res.json())

	const posts = res.posts

	return posts
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
   
    const posts = await getPost()
    
	return {
		props: { posts },
		revalidate: 10
	}
}

// hello-world - on first request = Ghost CMS call is made (1)
// hello-world - on other requests ... = filesystem is called (1M)

export const getStaticPaths = () => {
	// paths -> slugs which are allowed
	// fallback ->
	return {
		paths: [],
		fallback: true
	}
}








export default function blogId({posts}) {
   
  

    const router = useRouter()

    let post = posts?.filter(post => router.query.blogId === post.id)
    
    console.log('at blogid',post?.length)

	if (router.isFallback) {
		return <h1>Loading...</h1>
	}

    
    return (
        <div>
            <Header />
            <SinglePageTitle post={post[0]} />
           <div className='body-side'>
                <PostBody post={post[0]} />
                <RelatedPost  posts={posts}/>
           </div> 
                <Footer />
        </div>
    )
}
