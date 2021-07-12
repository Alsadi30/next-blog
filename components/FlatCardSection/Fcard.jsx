import Image from 'next/image'
import readingTime from 'reading-time'
import Link from 'next/link'

export default function FCard({ post }) {

    const time = readingTime(post.body)

    return (
        <div className='flat-card'>
            <Link href={`/blog/${post.category}/${post.id}`}>
                  <a>
            <div className=''>
                <Image className='flat-card-img'
                    src={post.img}
                    width={420}
                    height={580}
                    alt='thumbnail'
                    />
                    </div>
                    </a>
                </Link>
 
                <Link href={`/blog/${post.category}/${post.id}`}>
                <a>
                    
             <div>
               <div className='card-title'>
                 {post.title}
             </div>
             <div className='card-body'>
                 {post.body.slice(0,50)}...
                </div>
                <div className='card-date'>
                    <span>{post.date}</span>
                    <span className='dot'>.</span>
                    <span>{time.text}</span>
                </div>
                    </div>
                    </a>
                </Link>
        </div>
    )
}
