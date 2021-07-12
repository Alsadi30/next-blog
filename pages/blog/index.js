import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import FlatCardSection from '../../components/FlatCardSection'
import StraightCardSection from '../../components/StraightCardSection'
import Footer from '../../components/Footer'

export default function Blog() {
    return (
        <div className='blog-container'> 
            <Header />
            <SectionHeader CategoryName={'Energy & Environment'}/>
            <FlatCardSection CategoryName={'Energy & Environment'} />
            <SectionHeader CategoryName={'Physics & Mathematics'} />
            <StraightCardSection CategoryName={'Physics & Mathematics'} />
            <SectionHeader CategoryName={'Technology'} />
            <FlatCardSection CategoryName={'Technology'} />
            <SectionHeader CategoryName={'Space'} />
            <StraightCardSection CategoryName={'Space'} />
            <Footer />
        </div>
    )
}
