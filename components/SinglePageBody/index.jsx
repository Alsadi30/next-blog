

export default function PostBody({post}) {
   const body = post?.html
    return (
        <div className='post-body'>
            <div className='body' dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </div>
    )
}
