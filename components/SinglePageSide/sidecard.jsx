import Image from 'next/image'
import readingTime from 'reading-time'
import Link from 'next/link'

export default function Sidecard({post}) {
    const time = readingTime(post.body)
    return (
        <div className='side-card'>
             <Link href={`/blog/${post.category}/${post.id}`}>
                  <a>
             <div className=''>
                <Image className='side-card-img'
                    src={post.img}
                    width={290}
                    height={390}
                    alt='thumbnail'
                    />
            </div>
            </a>
            </Link>
            <Link href={`/blog/${post.category}/${post.id}`}>
                  <a>
            <div>
             <div className='side-card-title'>
                 {post.title}
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
