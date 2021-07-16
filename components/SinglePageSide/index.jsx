import Sidecard from './sidecard'


  



export default function RelatedPost({posts}) {

    
   

    let Posts =  posts.slice(0,6)
    
    return (
        <div className='side-container'>
            <div className='side-title'>
                Related Post
            </div>
        { Posts?.map(post=> <Sidecard post={post}/>)}
    </div>
    )
}
