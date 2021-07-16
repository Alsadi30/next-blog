
import Post from './post'

export default function Slider({Posts}) {
    return (

        <div className='slider-container'>
            {Posts.slice(0, 1).map((post,index)=> {
                return <Post post={post} index={index}/>
           })} 
            </div>
    )
}
