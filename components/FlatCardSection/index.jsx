// import Posts from "../../constants"
import Card from './Fcard'

export default function FlatCardSection(props) {
    
    let {posts,slug,Place} = props

  
    const Posts = posts?.filter(post => {


        return post?.slug.split('-')[0] === slug.split(' ')[0].toLowerCase()
    })
   
    if(Place) Posts.splice(6)
  
  
    return (
        <div className='flat-card-section-container'>
           
            {Posts?.map((post,index) => {
                return  <Card key={index} post={post} />
            })
        }
        </div>
    )
}
