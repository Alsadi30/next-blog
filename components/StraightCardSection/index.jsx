
import SCard from './card'

export default function StraightCardSection(props) {
    
    let {posts,slug,Place} = props

    
  
    const Posts = posts?.filter(post => {
       return post?.slug.split('-')[0] === slug.split(' ')[0].toLowerCase()
    })

   
    if(Place) Posts.splice(6)
   
    
    return (
        <div className='straight-card-section-container'>
            {Posts?.map((post,index)=> <SCard key={index} post={post}/>)}
        </div>
    )
}
