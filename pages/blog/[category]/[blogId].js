import { useRouter } from 'next/router'
import Posts from '../../../constants'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import SinglePageTitle from '../../../components/SinglePageTitle'
import PostBody from '../../../components/SinglePageBody'
import RelatedPost from '../../../components/SinglePageSide'

export default function blogId() {

    const router = useRouter()
    const category = router.query.category
    const id = router.query.blogId
    const Post = Posts.find(post => post.id == id)
    
    return (
        <div>
            <Header />
            <SinglePageTitle post={Post} />
           <div className='body-side'>
                <PostBody post={Post} />
                <RelatedPost category={category}/>
           </div> 
                <Footer />
        </div>
    )
}
