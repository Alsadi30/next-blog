

export default function PostBody(props) {
   const body = props.post?.body
    return (
        <div className='post-body'>
          <div className='body'>
                {body}
                </div>   
            </div>
    )
}
