import Posts from "../../constants"
import Card from './Fcard'




// const { BLOG_URL, CONTENT_API_KEY } = process.env



// // console.log(BLOG_URL,'hello',CONTENT_API_KEY)

// const getPosts =async () => {
  
//   const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`)
//     .then(res => res.json())
  
//   const posts = res.posts
//   console.log(posts)
//   return posts

// }



// export const getStaticProps = async ({ params }) => {
// 	const posts = await getPosts()
// 	return {
// 		revalidate: 10,
// 		props: { posts }
// 	}
// }





export default function FlatCardSection({CategoryName,Place  }) {
    
    

    const pots = Posts.filter(post => {
       return post.category === CategoryName
    })
   
    if(Place) pots.splice(6)
    
    return (
        <div className='flat-card-section-container'>
           
            {pots.map(post => {
                return  <Card post={post} />
            })
        }
        </div>
    )
}
