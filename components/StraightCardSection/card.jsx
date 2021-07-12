import Image from 'next/image'
import readingTime from 'reading-time'
import Link from 'next/link'


export default function SCard({post}) {

    const time = readingTime(post.body)

    return (
        <div className='straight-card'>
            <Link href={`/blog/${post.category}/${post.id}`}>
                  <a>
            <div className=''>
                <Image className='flat-card-img'
                    src={post.img}
                    width={330}
                    height={240}
                    alt='thumbnail'
                />
                    </div>
               
            <div className='straight-card-title'>
                {post.title}
            </div>
            <div className='straight-card-body'>
                {post.body.slice(0,100)}...
            </div>
            <div className='straight-card-date'>
                <span>{post.date}</span>
                <span className='straight-dot'>.</span>
                <span>{time.text}</span>
                </div>
                </a>
                </Link>
        </div>
    )
}

