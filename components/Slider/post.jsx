import React,{useState,useEffect} from 'react'
import Image from 'next/image'



 function Post({post,index}) {


    
    return (
        <div className='slider'>
            <div className='slider-left'>
               <div className='slider-title'>
                  {post.title}
               </div>
               <div className='slider-body'>
                  {post.body.slice(0,80)}
                </div>
                
            </div>
            <div className='slider-right'>
                <Image
                    className='slider-img'
                    src={post.img}
                    width={370}
                    height={425}
                    alt='img'
                />
            </div>
        </div>
        )
    
}

export default Post