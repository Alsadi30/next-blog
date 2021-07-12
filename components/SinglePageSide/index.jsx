import Posts from "../../constants"
import Sidecard from './sidecard'

export default function RelatedPost(props) {

    const category = props.category

    let posts;
    if(category) posts = Posts.filter(Post=>Post.category===category)
    console.log(posts) 
    return (
        <div className='side-container'>
            <div className='side-title'>
                Related Post
            </div>
        { posts?.map(post=> <Sidecard post={post}/>)}
    </div>
    )
}
