import readingTime from "reading-time"
import Image from 'next/image'

export default function Title(props) {


    const title = props.post?.title
    const body = props.post?.body
    const author = props.post?.author
    const date = props.post?.date
    const img = props.post?.img


    let time;
       if(body)time = readingTime(body)

    return (
        <div className='title-container'>
            <div className='post-title'>
              {title}
            </div>
            <div className='author'>
                <span>
                By <strong>{` ${ author} . `}</strong>               
                </span>
                <span>
              Published at  <strong>{`  ${date}  .`} </strong>  
                </span>
                <span className='read-time'>
                    { ` ${time?.text}`}
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
