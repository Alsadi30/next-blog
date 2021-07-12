import Posts from "../../constants"
import Card from './card'

export default function StraightCardSection({ CategoryName }) {
    
    const posts = Posts.filter(post => {
       return post.category === CategoryName
    })
   
    
    return (
        <div className='straight-card-section-container'>
            {posts.map(post=> <Card post={post}/>)}
        </div>
    )
}
