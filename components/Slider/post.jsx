import Image from 'next/image'



 function Post({post,index}) {

    
    return (
        <div className='slider'>
            <div className='slider-left'>
               <div className='slider-title'>
                  {post.title}
               </div>
               <div className='slider-body'>
                  {post.custom_excerpt?.slice(0,80)}
                </div>
                
            </div>
            <div className='slider-right'>
                <img
                    className='slider-img'
                    src={post.feature_image}
                    width='370px'
                    height='425px'
                    alt='img'
                />
            </div>
        </div>
        )
    
}

export default Post