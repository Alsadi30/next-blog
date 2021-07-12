import Link from "next/link"


export default function SectionHeader({CategoryName}) {
    return (
        <div className='section-head-container'>
            <span className='section-header'> {CategoryName}</span>
           <Link  href={`/blog/${CategoryName}`}><button className='section-head-button'>View More</button></Link>
        </div>
    )
}
