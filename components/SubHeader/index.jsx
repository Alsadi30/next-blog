import categorys from '../../constants/category'
import Card from './card'
import Link from 'next/link'

export default function index() {
    return (
        <div className='subhead-container'>
            
            {categorys.map((category,index) => {
                return (
                    <Link href={`/blog/${category.name}`} >
                        <a>
                         <Card key={index} categorys={category} />
                         </a>
                 </Link>
                )
            })}
            
        </div>
    )
}
