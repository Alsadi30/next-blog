import Posts from '../../constants'
import Post from './post'

export default function Slider() {
    return (

        <div className='slider-container'>
            {Posts.slice(0, 1).map((post,index)=> {
                return <Post post={post} index={index}/>
           })} 
            </div>
    )
}
