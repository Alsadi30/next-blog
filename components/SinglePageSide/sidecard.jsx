import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

export default function Sidecard({post}) {
 
    return (
        <div className='side-card'>
             <Link href={`/singlePage/${post.id}`}>
                  <a>
             <div className='side-card-img-div'>
                <img className='side-card-img'
                    src={post.feature_image}
                    width={290}
                    height={390}
                    alt='thumbnail'
                    />
            </div>
            </a>
            </Link>
            <Link href={`/singlePage/${post.id}`}>
                  <a>
            <div>
             <div className='side-card-title'>
                 {post.title}
             </div>
           
                <div className='card-date'>
                    <span>{moment(post.published_at).format('MMMM Do YYYY')}</span>
                    <span className='dot'>.</span>
                    <span>{post.reading_time } min read</span>
                </div>
                    </div>
                    </a>
            </Link>
        </div>
    )
}
