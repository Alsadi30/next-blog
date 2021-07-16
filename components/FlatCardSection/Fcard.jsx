import Image from 'next/image'
import Link from 'next/link'
import moment  from 'moment'

export default function FCard({ post }) {
   
    const date = moment(post.published_at).format('MMMM Do YYYY')

    return (
        <div className='flat-card'>
            <Link href={`/singlePage/${post.id}`}>
                  <a>
            <div className='flat-card-img-div'>
                <Image className='flat-card-img'
                    src={post.feature_image}
                    width={215}
                    height={290}
                    alt='thumbnail'
                    />
                    </div>
                    </a>
                </Link>
 
                <Link href={`/singlePage/${post.id}`}>
                <a>
                    
             <div>
               <div className='card-title'>
                 {post.title}
             </div>
             <div className='card-body'>
                 {post.custom_excerpt?.slice(0,50)}...
                </div>
                <div className='card-date'>
                    <span>{date}</span>
                    <span className='dot'>.</span>
                    <span>{post.reading_time} min read</span>
                </div>
                    </div>
                    </a>
                </Link>
        </div>
    )
}
