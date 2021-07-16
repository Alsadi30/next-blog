import Image from 'next/image'
import moment from 'moment'



export default function Title({post}) {
  
    console.log(post)

    const title = post?.title
    const date = moment(post?.published_at).format('MMMM Do YYYY')
    const img = post?.feature_image


    return (
        <div className='title-container'>
            <div className='post-title'>
              {title}
            </div>
            <div className='author'>
                <span>
                By <strong>{` Sayed . `}</strong>               
                </span>
                <span>
              Published at  <strong>{`  ${date}  .`} </strong>  
                </span>
                <span className='read-time'>
                    { ` ${post.reading_time} min read`}
                </span>
            </div>

            <div className='single-img'>
                {img && <Image className='img'
                    src={img}
                    layout='responsive'
                    width={600}
                    height={250}
                    alt='thumbnail'
                />}
            </div>

        </div>
    )
}
