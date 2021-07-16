import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'





export default function SCard({post}) {
    
    const date = moment(post.published_at).format('MMMM Do YYYY')

    return (
        <div className='straight-card'>
            <Link href={`/singlePage/${post.id}`}>
                  <a>
            <div className='straight-img'>
                <Image className='flat-card-img'
                    src={post.feature_image}
                    width={330}
                    height={240}
                    alt='thumbnail'
                />
                    </div>
               
            <div className='straight-card-title'>
                {post.title}
            </div>
            <div className='straight-card-body'>
                {post.custom_excerpt?.slice(0,100)}...
            </div>
            <div className='straight-card-date'>
                <span>{date}</span>
                <span className='straight-dot'>.</span>
                <span>{post.reading_time} min read</span>
                </div>
                </a>
                </Link>
        </div>
    )
}

