import Link from "next/link"
import {useRouter}  from 'next/router'


export default function SectionHeader({slug}) {
    
    const router = useRouter()

    return (
        <div className='section-head-container'>
            <span className='section-header'> {slug}</span>
           <button onClick={() => router.push(`/blog/${slug}`)} className='section-head-button'>View More</button>
        </div>
    )
}
