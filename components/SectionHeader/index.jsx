import Link from "next/link"


export default function SectionHeader({slug}) {
    return (
        <div className='section-head-container'>
            <span className='section-header'> {slug}</span>
           <Link  href={`/blog/${slug}`}><button className='section-head-button'>View More</button></Link>
        </div>
    )
}
