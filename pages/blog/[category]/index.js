import Header from '../../../components/Header'
import SectionHeader from '../../../components/SectionHeader'
import StraightCardSection from '../../../components/StraightCardSection'
import {useRouter} from 'next/router'

export default function index() {

    const router = useRouter()
    const name =router.query.category

    return (
        <div>
            <Header />
            <SectionHeader CategoryName={name} />
            <StraightCardSection CategoryName={name}/>

        </div>
    )
}
